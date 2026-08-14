import { clientEngagementInsightTemplates } from '../data/clientEngagementInsights';
import { clients, contactEvents } from '../data/clientEngagementData';
import type { BusinessInsight, Client, ContactEvent, EngagementScore } from '../models';

const MEETING_WEIGHT = 0.4;
const REVIEW_WEIGHT = 0.35;
const COMMUNICATION_WEIGHT = 0.25;

const DAY_IN_MS = 1000 * 60 * 60 * 24;
const MAX_MEETING_DAYS = 100;
const MAX_REVIEW_DAYS = 365;
const MAX_COMMUNICATION_DAYS = 90;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function daysSince(date?: string) {
  if (!date) return Number.POSITIVE_INFINITY;

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return Number.POSITIVE_INFINITY;

  const now = Date.now();
  const raw = Math.floor((now - parsedDate.getTime()) / DAY_IN_MS);
  return clamp(raw, 0, Number.MAX_SAFE_INTEGER);
}

function recencyScore(days: number, maxDays: number) {
  if (!Number.isFinite(days)) return 0;
  return Math.round(clamp(((maxDays - days) / maxDays) * 100, 0, 100));
}

function lastDateForType(events: ContactEvent[], type: ContactEvent['type']) {
  const now = Date.now();
  return events
    .filter((event) => event.type === type)
    .map((event) => event.date)
    .filter((date) => {
      const parsed = new Date(date);
      return !Number.isNaN(parsed.getTime()) && parsed.getTime() <= now;
    })
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
}

export const clientEngagementService = {
  getClients(): Client[] {
    return clients;
  },

  getEvents(): ContactEvent[] {
    return contactEvents;
  },

  calculateEngagementScore(client: Client, events: ContactEvent[]): EngagementScore {
    const clientEvents = events.filter((event) => event.clientId === client.id);

    const lastMeetingDate = lastDateForType(clientEvents, 'meeting');
    const lastReviewDate = lastDateForType(clientEvents, 'review');
    const lastCommunicationDate = lastDateForType(clientEvents, 'communication');

    const meetingScore = recencyScore(daysSince(lastMeetingDate), MAX_MEETING_DAYS);
    const reviewScore = recencyScore(daysSince(lastReviewDate), MAX_REVIEW_DAYS);
    const communicationScore = recencyScore(daysSince(lastCommunicationDate), MAX_COMMUNICATION_DAYS);

    const score = Math.round(
      meetingScore * MEETING_WEIGHT +
        reviewScore * REVIEW_WEIGHT +
        communicationScore * COMMUNICATION_WEIGHT,
    );

    const latestContactDate = [lastMeetingDate, lastReviewDate, lastCommunicationDate]
      .filter((date): date is string => Boolean(date))
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

    return {
      clientId: client.id,
      score,
      meetingScore,
      reviewScore,
      communicationScore,
      lastMeetingDate,
      lastReviewDate,
      lastCommunicationDate,
      daysSinceLastContact: Number.isFinite(daysSince(latestContactDate)) ? daysSince(latestContactDate) : 999,
    };
  },

  getClientEngagementScores(): EngagementScore[] {
    return clients.map((client) => this.calculateEngagementScore(client, contactEvents));
  },

  sortClientsByEngagement(scores: EngagementScore[], order: 'asc' | 'desc'): EngagementScore[] {
    return [...scores].sort((a, b) => (order === 'asc' ? a.score - b.score : b.score - a.score));
  },

  getEngagementInsights(scores: EngagementScore[]): BusinessInsight[] {
    const atRiskCount = scores.filter((score) => score.score < 60).length;
    const engagedCount = scores.filter((score) => score.score >= 80).length;
    const reviewCoverage = Math.round((scores.filter((score) => score.reviewScore >= 60).length / scores.length) * 100);

    return clientEngagementInsightTemplates.map((template) => ({
      ...template,
      message: template.message
        .replace('{atRiskCount}', String(atRiskCount))
        .replace('{engagedCount}', String(engagedCount))
        .replace('{reviewCoverage}', String(reviewCoverage)),
    }));
  },
};

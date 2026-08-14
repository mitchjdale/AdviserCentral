import type { BusinessInsight } from '../models';

/** Template insight copy for the Client Engagement page. */
export const clientEngagementInsightTemplates: BusinessInsight[] = [
  {
    id: 'engagement-overdue',
    message: '{atRiskCount} clients are at risk of disengagement and need outreach this month.',
    tone: 'warning',
  },
  {
    id: 'engagement-coverage',
    message: 'Annual review coverage is {reviewCoverage}% across the active client base.',
    tone: 'neutral',
  },
  {
    id: 'engagement-top-band',
    message: '{engagedCount} clients are currently in the high engagement band (80+).',
    tone: 'positive',
  },
];

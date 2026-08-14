/** Client lifecycle status in the engagement workflow. */
export type ClientStatus = 'active' | 'dormant' | 'at-risk';

/** Supported engagement activity categories. */
export type ContactEventType = 'meeting' | 'review' | 'communication';

/** A client represented in the engagement page. */
export interface Client {
  id: string;
  name: string;
  role: string;
  status: ClientStatus;
}

/** A dated interaction used to derive engagement recency. */
export interface ContactEvent {
  clientId: string;
  type: ContactEventType;
  date: string;
  notes: string;
}

/** A per-client derived engagement score and its component parts. */
export interface EngagementScore {
  clientId: string;
  score: number;
  meetingScore: number;
  reviewScore: number;
  communicationScore: number;
  lastMeetingDate?: string;
  lastReviewDate?: string;
  lastCommunicationDate?: string;
  daysSinceLastContact: number;
}

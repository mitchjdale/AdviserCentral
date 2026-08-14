/**
 * Domain models for Adviser Central.
 * These interfaces describe the shape of the mock data used across the app
 * and act as the contract future BA tickets will extend.
 */

/** A single financial-year retention data point. */
export interface RetentionHistory {
  /** Financial year label, e.g. "FY26". */
  financialYear: string;
  /** Client retention rate as a percentage, e.g. 97.2. */
  retention: number;
}

/** A generated, human-readable business insight shown on the dashboard. */
export interface BusinessInsight {
  /** Stable identifier. */
  id: string;
  /** Insight copy shown to the adviser. */
  message: string;
  /** Sentiment used to colour the insight indicator. */
  tone: 'positive' | 'neutral' | 'warning';
}

/** A single KPI summary, e.g. Client Retention. */
export interface KpiSummary {
  label: string;
  value: string;
  changeLabel: string;
  /** Direction of the trend indicator. */
  trend: 'up' | 'down' | 'flat';
}

export type { Client, ClientStatus, ContactEvent, ContactEventType, EngagementScore } from './ClientEngagement';

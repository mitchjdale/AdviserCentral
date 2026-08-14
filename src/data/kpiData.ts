import type { KpiSummary } from '../models';

/** KPI summaries rendered on the dashboard. Only Client Retention is live in v1. */
export const kpiSummaries: KpiSummary[] = [
  {
    label: 'Client Retention',
    value: '97.2%',
    changeLabel: '+1.4% vs Previous Financial Year',
    trend: 'up',
  },
];

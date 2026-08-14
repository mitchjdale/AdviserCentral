import type { BusinessInsight } from '../models';

/** Static, mock business insights for the dashboard. */
export const businessInsights: BusinessInsight[] = [
  {
    id: 'insight-consecutive-growth',
    message: 'Client retention has increased for five consecutive years.',
    tone: 'positive',
  },
  {
    id: 'insight-above-target',
    message: 'Current retention is above the practice target of 95%.',
    tone: 'positive',
  },
  {
    id: 'insight-hnw-strength',
    message: 'Retention growth is strongest among high-net-worth clients.',
    tone: 'neutral',
  },
];

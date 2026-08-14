import type { RetentionHistory } from '../models';

/** Five-year client retention history (mock data). */
export const retentionHistory: RetentionHistory[] = [
  { financialYear: 'FY22', retention: 92 },
  { financialYear: 'FY23', retention: 93 },
  { financialYear: 'FY24', retention: 94 },
  { financialYear: 'FY25', retention: 95.8 },
  { financialYear: 'FY26', retention: 97.2 },
];

/** The practice retention target used for reference lines and insights. */
export const retentionTarget = 95;

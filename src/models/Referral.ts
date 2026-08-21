/** A single financial-year referral conversion data point. */
export interface ReferralConversionHistory {
  /** Financial year label, e.g. "FY26". */
  financialYear: string;
  /** Number of referrals received in the year. */
  totalReferrals: number;
  /** Number of referrals that converted to onboarded clients. */
  convertedReferrals: number;
  /** Referral conversion rate as a percentage, e.g. 68.9. */
  conversionRate: number;
}

/** A referral-specific business insight. */
export interface ReferralInsight {
  id: string;
  message: string;
  tone: 'positive' | 'neutral' | 'warning';
}

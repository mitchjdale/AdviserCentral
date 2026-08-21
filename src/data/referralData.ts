import type { ReferralConversionHistory } from '../models';

/** Five-year referral conversion history (mock data). */
export const referralConversionHistory: ReferralConversionHistory[] = [
  { financialYear: 'FY22', totalReferrals: 42, convertedReferrals: 24, conversionRate: 57.1 },
  { financialYear: 'FY23', totalReferrals: 49, convertedReferrals: 30, conversionRate: 61.2 },
  { financialYear: 'FY24', totalReferrals: 47, convertedReferrals: 30, conversionRate: 63.8 },
  { financialYear: 'FY25', totalReferrals: 52, convertedReferrals: 34, conversionRate: 65.4 },
  { financialYear: 'FY26', totalReferrals: 45, convertedReferrals: 31, conversionRate: 68.9 },
];

/** Practice referral conversion target used by chart reference lines and insights. */
export const referralConversionTarget = 70;

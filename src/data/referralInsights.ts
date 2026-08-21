import type { ReferralInsight } from '../models/Referral';

/** Static, mock business insights for referral performance. */
export const referralInsights: ReferralInsight[] = [
  {
    id: 'referrals-3yr-growth',
    message: 'Referral conversion has improved by 11.8% over the past three financial years.',
    tone: 'positive',
  },
  {
    id: 'referrals-source-strength',
    message: 'Client-to-client referrals are converting at 78%, the strongest referral source.',
    tone: 'neutral',
  },
  {
    id: 'referrals-target-gap',
    message: 'Current conversion rate is 1.1% below the practice target of 70%.',
    tone: 'warning',
  },
];

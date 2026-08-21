import { referralInsights } from '../data/referralInsights';
import { referralConversionHistory, referralConversionTarget } from '../data/referralData';
import type { BusinessInsight, ReferralConversionHistory } from '../models';

export interface ReferralConversionSummary {
  currentRate: number;
  previousRate: number;
  change: number;
  trend: 'up' | 'down' | 'flat';
  hasPreviousYear: boolean;
}

/** Mock referral service used to drive the referrals feature. */
export const referralService = {
  getReferralConversionHistory(): ReferralConversionHistory[] {
    return referralConversionHistory;
  },
  getReferralConversionTarget(): number {
    return referralConversionTarget;
  },
  getReferralInsights(): BusinessInsight[] {
    return referralInsights;
  },
  getReferralConversionSummary(): ReferralConversionSummary {
    const history = referralConversionHistory;
    if (history.length === 0) {
      return { currentRate: 0, previousRate: 0, change: 0, trend: 'flat', hasPreviousYear: false };
    }

    const current = history[history.length - 1];
    const previous = history[history.length - 2];
    if (!previous) {
      return {
        currentRate: current.conversionRate,
        previousRate: 0,
        change: 0,
        trend: 'flat',
        hasPreviousYear: false,
      };
    }

    const change = Number((current.conversionRate - previous.conversionRate).toFixed(1));
    const trend = change > 0 ? 'up' : change < 0 ? 'down' : 'flat';

    return {
      currentRate: current.conversionRate,
      previousRate: previous.conversionRate,
      change,
      trend,
      hasPreviousYear: true,
    };
  },
};

import { retentionHistory, retentionTarget } from '../data/retentionData';
import { businessInsights } from '../data/insightsData';
import { kpiSummaries } from '../data/kpiData';
import type { BusinessInsight, KpiSummary, RetentionHistory } from '../models';

/**
 * Mock dashboard service.
 *
 * In a future release these functions will call the practice analytics API.
 * For now they return static mock data synchronously so the UI can be built
 * and extended independently of any backend.
 */
export const dashboardService = {
  getRetentionHistory(): RetentionHistory[] {
    return retentionHistory;
  },
  getRetentionTarget(): number {
    return retentionTarget;
  },
  getBusinessInsights(): BusinessInsight[] {
    return businessInsights;
  },
  getKpiSummaries(): KpiSummary[] {
    return kpiSummaries;
  },
};

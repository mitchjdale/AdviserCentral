import { Box, Card, CardContent, Typography } from '@mui/material';
import InsightCard from '../components/InsightCard';
import KpiCard from '../components/KpiCard';
import PageHeader from '../components/PageHeader';
import ReferralConversionChart from '../charts/ReferralConversionChart';
import type { KpiSummary } from '../models';
import { referralService } from '../services/referralService';

/** Referrals page with conversion KPI, insights and trend chart. */
export default function ReferralsPage() {
  const history = referralService.getReferralConversionHistory();
  const target = referralService.getReferralConversionTarget();
  const insights = referralService.getReferralInsights();
  const summary = referralService.getReferralConversionSummary();

  const kpi: KpiSummary = {
    label: 'Referral Conversion Rate',
    value: `${summary.currentRate.toFixed(1)}%`,
    changeLabel: summary.hasPreviousYear
      ? `${summary.change >= 0 ? '+' : ''}${summary.change.toFixed(1)}% vs Previous Financial Year`
      : 'No prior year data',
    trend: summary.trend,
  };

  return (
    <Box>
      <PageHeader
        title="Referrals"
        subtitle="Track referral sources, conversion rates and network growth"
      />

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
          mb: 3,
        }}
      >
        <KpiCard kpi={kpi} />
        <InsightCard insights={insights} />
      </Box>

      <Card>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">Referral Conversion</Typography>
            <Typography variant="body2" color="text.secondary">
              Referral conversion rate by financial year, against the practice target
            </Typography>
          </Box>
          <ReferralConversionChart data={history} target={target} />
        </CardContent>
      </Card>
    </Box>
  );
}

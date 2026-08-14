import { Box, Card, CardContent, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import KpiCard from '../components/KpiCard';
import InsightCard from '../components/InsightCard';
import RetentionChart from '../charts/RetentionChart';
import { dashboardService } from '../services/dashboardService';

/** The only fully implemented page in v1. */
export default function Dashboard() {
  const kpis = dashboardService.getKpiSummaries();
  const retention = dashboardService.getRetentionHistory();
  const target = dashboardService.getRetentionTarget();
  const insights = dashboardService.getBusinessInsights();

  return (
    <Box>
      <PageHeader title="Adviser Central" subtitle="Helping advisers track their success" />

      {/* Top row: KPI summary + insights */}
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
          mb: 3,
        }}
      >
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
        <InsightCard insights={insights} />
      </Box>

      {/* Retention chart */}
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">Client Retention</Typography>
            <Typography variant="body2" color="text.secondary">
              Retention rate by financial year, against the practice target
            </Typography>
          </Box>
          <RetentionChart data={retention} target={target} />
        </CardContent>
      </Card>
    </Box>
  );
}

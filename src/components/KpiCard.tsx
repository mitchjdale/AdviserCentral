import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import type { KpiSummary } from '../models';

interface KpiCardProps {
  kpi: KpiSummary;
}

const trendConfig = {
  up: { color: 'success' as const, Icon: ArrowUpwardRoundedIcon },
  down: { color: 'error' as const, Icon: ArrowDownwardRoundedIcon },
  flat: { color: 'default' as const, Icon: TrendingFlatRoundedIcon },
};

/** Reusable KPI summary card with a coloured trend indicator. */
export default function KpiCard({ kpi }: KpiCardProps) {
  const { color, Icon } = trendConfig[kpi.trend];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', letterSpacing: '0.08em', fontWeight: 600 }}
        >
          {kpi.label}
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 700, mt: 1, mb: 2, letterSpacing: '-0.02em' }}>
          {kpi.value}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Chip
            size="small"
            color={color}
            icon={<Icon sx={{ fontSize: 16 }} />}
            label={kpi.changeLabel}
            sx={{
              fontWeight: 600,
              bgcolor: kpi.trend === 'up' ? 'success.light' : undefined,
              color: kpi.trend === 'up' ? 'success.dark' : undefined,
              '& .MuiChip-icon': { color: 'inherit' },
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

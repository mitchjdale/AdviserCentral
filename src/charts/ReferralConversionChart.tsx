import { useTheme } from '@mui/material/styles';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ReferralConversionHistory } from '../models';

interface ReferralConversionChartProps {
  data: ReferralConversionHistory[];
  target?: number;
  height?: number;
}

/** Responsive referral conversion chart built with Recharts. */
export default function ReferralConversionChart({
  data,
  target,
  height = 320,
}: ReferralConversionChartProps) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
        <defs>
          <linearGradient id="referralConversionFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={primary} stopOpacity={0.28} />
            <stop offset="100%" stopColor={primary} stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="4 4" stroke={theme.palette.divider} vertical={false} />
        <XAxis
          dataKey="financialYear"
          tickLine={false}
          axisLine={false}
          tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          dy={8}
        />
        <YAxis
          domain={[0, 100]}
          tickLine={false}
          axisLine={false}
          tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          tickFormatter={(v) => `${v}%`}
          width={44}
        />
        <Tooltip
          formatter={(value, _name, payload) => [
            `${value}% (${payload.payload.convertedReferrals}/${payload.payload.totalReferrals})`,
            'Conversion Rate',
          ]}
          contentStyle={{
            borderRadius: 12,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 8px 24px rgba(16,24,40,0.12)',
            fontSize: 13,
          }}
          labelStyle={{ fontWeight: 600, color: theme.palette.text.primary }}
        />
        {target !== undefined && (
          <ReferenceLine
            y={target}
            stroke={theme.palette.success.main}
            strokeDasharray="6 6"
            label={{
              value: `Target ${target}%`,
              position: 'insideTopRight',
              fill: theme.palette.success.dark,
              fontSize: 11,
            }}
          />
        )}
        <Area
          type="monotone"
          dataKey="conversionRate"
          stroke={primary}
          strokeWidth={3}
          fill="url(#referralConversionFill)"
          dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: primary }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

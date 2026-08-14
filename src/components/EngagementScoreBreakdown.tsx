import { Box, LinearProgress, Stack, Tooltip, Typography } from '@mui/material';
import type { EngagementScore } from '../models';

interface EngagementScoreBreakdownProps {
  score: EngagementScore;
}

const breakdownConfig = [
  { key: 'meetingScore', label: 'Meetings (40%)', dateKey: 'lastMeetingDate' },
  { key: 'reviewScore', label: 'Annual Reviews (35%)', dateKey: 'lastReviewDate' },
  { key: 'communicationScore', label: 'Communications (25%)', dateKey: 'lastCommunicationDate' },
] as const;

function formatDate(date?: string) {
  if (!date) return 'No activity';
  return new Date(date).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

function progressColour(value: number) {
  if (value >= 80) return 'success';
  if (value >= 60) return 'primary';
  if (value >= 40) return 'warning';
  return 'error';
}

/** Displays meeting/review/communication score components for a client. */
export default function EngagementScoreBreakdown({ score }: EngagementScoreBreakdownProps) {
  return (
    <Stack spacing={1.5} sx={{ mt: 1 }}>
      {breakdownConfig.map((item) => {
        const value = score[item.key];
        const date = score[item.dateKey];

        return (
          <Box key={item.key}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 0.5 }}>
              <Tooltip title={`Last contact: ${formatDate(date)}`}>
                <Typography variant="body2">{item.label}</Typography>
              </Tooltip>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{value}</Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={value}
              color={progressColour(value)}
              aria-label={`${item.label} score ${value} out of 100`}
              sx={{ height: 8, borderRadius: 999 }}
            />
          </Box>
        );
      })}
    </Stack>
  );
}

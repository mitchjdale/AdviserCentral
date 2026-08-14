import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import type { Client, EngagementScore } from '../models';
import EngagementScoreBreakdown from './EngagementScoreBreakdown';

interface ClientScoreCardProps {
  client: Client;
  score: EngagementScore;
}

function engagementBand(value: number) {
  if (value >= 80) return { label: 'Engaged', color: 'success' as const };
  if (value >= 60) return { label: 'Moderate', color: 'primary' as const };
  if (value >= 40) return { label: 'At-risk', color: 'warning' as const };
  return { label: 'Critical', color: 'error' as const };
}

function formatDate(date?: string) {
  if (!date) return 'No recent contact';
  return new Date(date).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

/** Card row for a client and their engagement score. */
export default function ClientScoreCard({ client, score }: ClientScoreCardProps) {
  const [expanded, setExpanded] = useState(false);
  const band = engagementBand(score.score);
  const lastContactDate = [score.lastMeetingDate, score.lastReviewDate, score.lastCommunicationDate]
    .filter((date): date is string => Boolean(date))
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

  return (
    <Card
      sx={{
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        '&:hover': { boxShadow: 6, transform: 'translateY(-1px)' },
      }}
    >
      <CardContent>
        <Stack spacing={1.5}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ justifyContent: 'space-between', gap: 1 }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {client.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {client.role}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Chip size="small" label={client.status} />
              <Chip size="small" color={band.color} label={band.label} />
            </Stack>
          </Stack>

          <Box aria-label={`${client.name} engagement score ${score.score} out of 100`}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="body2">Engagement score</Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {score.score}/100
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={score.score}
              color={band.color}
              sx={{ height: 10, borderRadius: 999 }}
            />
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ justifyContent: 'space-between', gap: 1 }}
          >
            <Typography variant="body2" color="text.secondary">
              Last contact: {formatDate(lastContactDate)}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                {score.daysSinceLastContact} days ago
              </Typography>
              <IconButton
                size="small"
                onClick={() => setExpanded((current) => !current)}
                aria-label={expanded ? 'Hide score breakdown' : 'Show score breakdown'}
              >
                {expanded ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
              </IconButton>
            </Stack>
          </Stack>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <EngagementScoreBreakdown score={score} />
          </Collapse>
        </Stack>
      </CardContent>
    </Card>
  );
}

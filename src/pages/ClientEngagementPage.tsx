import { useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ClientScoreCard from '../components/ClientScoreCard';
import InsightCard from '../components/InsightCard';
import PageHeader from '../components/PageHeader';
import { clientEngagementService } from '../services/clientEngagementService';
import type { Client, EngagementScore } from '../models';

type SortField = 'score-desc' | 'score-asc' | 'name' | 'status' | 'last-contact';
type ScoreBand = 'all' | 'high' | 'moderate' | 'at-risk' | 'critical';
type StatusFilter = 'all' | Client['status'];

function scoreMatchesBand(score: number, band: ScoreBand) {
  if (band === 'all') return true;
  if (band === 'high') return score >= 80;
  if (band === 'moderate') return score >= 60 && score < 80;
  if (band === 'at-risk') return score >= 40 && score < 60;
  return score < 40;
}

function daysForSort(score: EngagementScore) {
  return Number.isFinite(score.daysSinceLastContact) ? score.daysSinceLastContact : Number.MAX_SAFE_INTEGER;
}

/** Client Engagement page with score list, filters and insight summary. */
export default function ClientEngagementPage() {
  const [sortBy, setSortBy] = useState<SortField>('score-desc');
  const [scoreBand, setScoreBand] = useState<ScoreBand>('all');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [search, setSearch] = useState('');

  const clients = clientEngagementService.getClients();
  const scores = clientEngagementService.getClientEngagementScores();

  const clientById = useMemo(() => new Map(clients.map((client) => [client.id, client])), [clients]);

  const filteredRows = useMemo(() => {
    const rows = scores
      .map((score) => ({ score, client: clientById.get(score.clientId) }))
      .filter((row): row is { score: EngagementScore; client: Client } => Boolean(row.client));

    const searched = rows.filter(({ client, score }) => {
      const matchesStatus = status === 'all' || client.status === status;
      const matchesBand = scoreMatchesBand(score.score, scoreBand);
      const matchesSearch = client.name.toLowerCase().includes(search.trim().toLowerCase());
      return matchesStatus && matchesBand && matchesSearch;
    });

    return searched.sort((a, b) => {
      if (sortBy === 'score-desc') return b.score.score - a.score.score;
      if (sortBy === 'score-asc') return a.score.score - b.score.score;
      if (sortBy === 'name') return a.client.name.localeCompare(b.client.name);
      if (sortBy === 'status') return a.client.status.localeCompare(b.client.status);
      return daysForSort(a.score) - daysForSort(b.score);
    });
  }, [clientById, scoreBand, scores, search, sortBy, status]);

  const summary = useMemo(() => {
    const total = scores.length;
    const averageScore = Math.round(scores.reduce((sum, item) => sum + item.score, 0) / total);
    const engaged = scores.filter((item) => item.score >= 80).length;
    const moderate = scores.filter((item) => item.score >= 60 && item.score < 80).length;
    const atRisk = scores.filter((item) => item.score < 60).length;

    return { total, averageScore, engaged, moderate, atRisk };
  }, [scores]);

  const insights = clientEngagementService.getEngagementInsights(scores);

  return (
    <Box>
      <PageHeader
        title="Client Engagement"
        subtitle="Track active client relationships and prioritise outreach"
      />

      <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', mb: 3 }}>
        <Chip label={`Total clients: ${summary.total}`} />
        <Chip color="primary" label={`Avg score: ${summary.averageScore}`} />
        <Chip color="success" label={`Engaged: ${summary.engaged}`} />
        <Chip color="info" label={`Moderate: ${summary.moderate}`} />
        <Chip color="warning" label={`At risk: ${summary.atRisk}`} />
      </Stack>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, mb: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Client scores
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
              <TextField
                label="Search client"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                size="small"
                fullWidth
              />

              <FormControl size="small" sx={{ minWidth: 170 }}>
                <InputLabel id="sort-label">Sort by</InputLabel>
                <Select
                  labelId="sort-label"
                  label="Sort by"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortField)}
                >
                  <MenuItem value="score-desc">Engagement score (high to low)</MenuItem>
                  <MenuItem value="score-asc">Engagement score (low to high)</MenuItem>
                  <MenuItem value="last-contact">Last contact</MenuItem>
                  <MenuItem value="name">Client name</MenuItem>
                  <MenuItem value="status">Status</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 170 }}>
                <InputLabel id="score-band-label">Score band</InputLabel>
                <Select
                  labelId="score-band-label"
                  label="Score band"
                  value={scoreBand}
                  onChange={(event) => setScoreBand(event.target.value as ScoreBand)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="high">High (80-100)</MenuItem>
                  <MenuItem value="moderate">Moderate (60-79)</MenuItem>
                  <MenuItem value="at-risk">At-risk (40-59)</MenuItem>
                  <MenuItem value="critical">Critical (0-39)</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 170 }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  label="Status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value as StatusFilter)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="dormant">Dormant</MenuItem>
                  <MenuItem value="at-risk">At-risk</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack spacing={2}>
              {filteredRows.map(({ client, score }) => (
                <ClientScoreCard key={client.id} client={client} score={score} />
              ))}
              {filteredRows.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  No clients match the selected filters.
                </Typography>
              )}
            </Stack>
          </CardContent>
        </Card>

        <InsightCard insights={insights} />
      </Box>
    </Box>
  );
}

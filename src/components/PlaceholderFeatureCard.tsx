import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

interface PlaceholderFeatureCardProps {
  title: string;
  description: string;
  bannerText?: string;
}

/** Attractive placeholder card used for not-yet-implemented features. */
export default function PlaceholderFeatureCard({
  title,
  description,
  bannerText = 'Coming Soon in a future release',
}: PlaceholderFeatureCardProps) {
  return (
    <Card sx={{ maxWidth: 720 }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e5eff 0%, #5a86ff 100%)',
          px: 4,
          py: 5,
          color: '#fff',
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <RocketLaunchRoundedIcon sx={{ fontSize: 32 }} />
          <Typography variant="h5" sx={{ color: '#fff' }}>
            {title}
          </Typography>
        </Stack>
        <Chip
          icon={<AutoAwesomeRoundedIcon sx={{ fontSize: 16, color: 'inherit !important' }} />}
          label={bannerText}
          size="small"
          sx={{
            mt: 2,
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.18)',
            fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.35)',
          }}
        />
      </Box>

      <CardContent sx={{ p: 4 }}>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>

        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            bgcolor: 'background.default',
            border: '1px dashed',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            This feature is part of the Adviser Central product roadmap. The scaffolding is in
            place so it can be delivered through a future BA ticket. See the README for the full
            roadmap and example tickets.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

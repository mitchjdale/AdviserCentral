import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import type { BusinessInsight } from '../models';

interface InsightCardProps {
  insights: BusinessInsight[];
}

const toneConfig = {
  positive: { color: 'success.main', Icon: CheckCircleRoundedIcon },
  neutral: { color: 'primary.main', Icon: InfoRoundedIcon },
  warning: { color: 'warning.main', Icon: WarningAmberRoundedIcon },
};

/** Card listing generated business insights. */
export default function InsightCard({ insights }: InsightCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
        >
          <LightbulbRoundedIcon sx={{ color: 'warning.main' }} />
          Business Insights
        </Typography>

        <List disablePadding>
          {insights.map((insight) => {
            const { color, Icon } = toneConfig[insight.tone];
            return (
              <ListItem key={insight.id} disableGutters sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
                  <Icon sx={{ color, fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={insight.message}
                  slotProps={{ primary: { variant: 'body2', color: 'text.primary' } }}
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

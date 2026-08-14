import { Box, Typography } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/** Consistent page-level heading used across all pages. */
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" color="text.primary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

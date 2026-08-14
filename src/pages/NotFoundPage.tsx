import { Box } from '@mui/material';
import PageHeader from '../components/PageHeader';
import PlaceholderFeatureCard from '../components/PlaceholderFeatureCard';

/** Fallback page for unknown routes. */
export default function NotFoundPage() {
  return (
    <Box>
      <PageHeader title="Page not found" subtitle="The page you are looking for does not exist" />
      <PlaceholderFeatureCard
        title="Nothing here yet"
        description="This route is not part of the current release. Head back to the Dashboard to view your practice performance."
        bannerText="Not available"
      />
    </Box>
  );
}

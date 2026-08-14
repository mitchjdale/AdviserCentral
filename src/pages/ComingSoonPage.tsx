import { Box } from '@mui/material';
import PageHeader from '../components/PageHeader';
import PlaceholderFeatureCard from '../components/PlaceholderFeatureCard';

interface ComingSoonPageProps {
  title: string;
  description: string;
}

/** Reusable placeholder page for not-yet-implemented features. */
export default function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <Box>
      <PageHeader title={title} subtitle="This feature is on the Adviser Central roadmap" />
      <PlaceholderFeatureCard title={title} description={description} />
    </Box>
  );
}

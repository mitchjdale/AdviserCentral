import type { SvgIconComponent } from '@mui/icons-material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

/** A single left-navigation entry. */
export interface NavItem {
  /** Router path. */
  path: string;
  /** Display label. */
  label: string;
  /** MUI icon component. */
  icon: SvgIconComponent;
  /** Whether the destination page is fully implemented. */
  implemented: boolean;
  /** Title used on the Coming Soon page. */
  title: string;
  /** Longer description of the eventual feature. */
  description: string;
}

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: DashboardRoundedIcon,
    implemented: true,
    title: 'Dashboard',
    description:
      'A single view of your practice health, blending performance KPIs, trend analysis and generated insights.',
  },
  {
    path: '/client-book-health',
    label: 'Client Book Health',
    icon: HealthAndSafetyRoundedIcon,
    implemented: false,
    title: 'Client Book Health',
    description:
      'Score the overall health of your client book, surface at-risk relationships and track review coverage across every segment.',
  },
  {
    path: '/adviser-score',
    label: 'Adviser Score',
    icon: MilitaryTechRoundedIcon,
    implemented: false,
    title: 'Adviser Score',
    description:
      'A composite success score that measures your performance across retention, growth, engagement and compliance, benchmarked over time.',
  },
  {
    path: '/revenue-growth',
    label: 'Revenue Growth',
    icon: TrendingUpRoundedIcon,
    implemented: false,
    title: 'Revenue Growth',
    description:
      'Track revenue, funds under advice and net new clients, broken down by segment and adviser, against prior financial years.',
  },
  {
    path: '/client-engagement',
    label: 'Client Engagement',
    icon: ForumRoundedIcon,
    implemented: true,
    title: 'Client Engagement',
    description:
      'Measure how actively your clients engage with your practice through meetings, reviews and communications, with contact heatmaps.',
  },
  {
    path: '/referrals',
    label: 'Referrals',
    icon: Diversity3RoundedIcon,
    implemented: true,
    title: 'Referrals',
    description:
      'Understand where new business comes from with referral tracking, conversion rates and a referral network graph.',
  },
  {
    path: '/opportunity-finder',
    label: 'Opportunity Finder',
    icon: TravelExploreRoundedIcon,
    implemented: false,
    title: 'Opportunity Finder',
    description:
      'AI-assisted discovery of growth opportunities such as retirement planning, insurance gaps and cross-sell moments within your client base.',
  },
  {
    path: '/revenue-forecasting',
    label: 'Revenue Forecasting',
    icon: QueryStatsRoundedIcon,
    implemented: false,
    title: 'Revenue Forecasting',
    description:
      'Forward-looking projections for revenue, retention and client churn, with explainable AI-driven forecast narratives.',
  },
  {
    path: '/adviser-benchmarking',
    label: 'Adviser Benchmarking',
    icon: LeaderboardRoundedIcon,
    implemented: false,
    title: 'Adviser Benchmarking',
    description:
      'Compare your practice against office, regional and peer-group benchmarks, and see where you rank on top-performer leaderboards.',
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: SettingsRoundedIcon,
    implemented: false,
    title: 'Settings',
    description:
      'Configure practice targets, manage adviser profiles, connect data sources and tailor Adviser Central to how your team works.',
  },
];

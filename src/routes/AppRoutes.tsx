import { Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/Dashboard';
import ComingSoonPage from '../pages/ComingSoonPage';
import ClientEngagementPage from '../pages/ClientEngagementPage';
import ReferralsPage from '../pages/ReferralsPage';
import NotFoundPage from '../pages/NotFoundPage';
import { navItems } from '../data/navigation';

/** Application routing for implemented and placeholder pages. */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/client-engagement" element={<ClientEngagementPage />} />
        <Route path="/referrals" element={<ReferralsPage />} />
        {navItems
          .filter((item) => !item.implemented)
          .map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<ComingSoonPage title={item.title} description={item.description} />}
            />
          ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

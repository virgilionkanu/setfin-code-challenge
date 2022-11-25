import { Routes, Route, Navigate } from 'react-router-dom';

import { InnerContent } from "./pages/inner-content/components";
import { Dashboard } from './pages/dashboard/components';
import { Settings } from './pages/settings/components';

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="dashboard"/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
);
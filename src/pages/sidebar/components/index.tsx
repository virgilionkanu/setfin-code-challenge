import { Link, useLocation } from 'react-router-dom';

import '../style.scss';

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>Dashboard</Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'sidebar_active' : ''}>Settings</Link>
      </div>
    </div>
  );
};

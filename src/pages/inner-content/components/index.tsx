import { Outlet } from 'react-router-dom';

import '../style.scss';

export const InnerContent = () => {
  return (
    <div className="inner-content">
      <Outlet/>
    </div>
  );
};
import './App.scss';

import { MainRoutes } from './Routes';
import { Sidebar } from './pages/sidebar/components';


export const App = () => {
  return (
    <div className="app">
      {/**Sidebar */}
      <Sidebar />
      {/**Inner container */}
      <MainRoutes />
    </div>
  );
};

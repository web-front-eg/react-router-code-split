import { Outlet } from 'react-router-dom';

import Nav from './Nav';

function Layout() {
  return (
    <div>
      <h1 style={{ display: 'contents' }}>Layout</h1>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;

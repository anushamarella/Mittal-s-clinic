import React from 'react';
import { Outlet } from 'react-router-dom';  // <-- import Outlet
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Main content: Sidebar + Outlet for pages */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Content area where routed pages will appear */}
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

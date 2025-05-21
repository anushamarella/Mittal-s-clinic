import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ setIsAuthenticated }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header setIsAuthenticated={setIsAuthenticated} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

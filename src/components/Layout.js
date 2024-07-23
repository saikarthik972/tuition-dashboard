import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

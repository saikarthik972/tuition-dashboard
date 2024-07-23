// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Logo</h3>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/not-found">Not Found</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

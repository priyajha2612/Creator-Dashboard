// File: src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, UserPlus, BarChart, Bell, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-700 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Creator Dashboard</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <Home size={20} /> <span>Dashboard</span>
        </Link>
        <Link to="/login" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <LogIn size={20} /> <span>Login</span>
        </Link>
        <Link to="/register" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <UserPlus size={20} /> <span>Register</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <BarChart size={20} /> <span>Analytics</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <Bell size={20} /> <span>Notifications</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <Settings size={20} /> <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BarChart2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav className="mt-6">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
            }`
          }
        >
          <Users className="w-5 h-5 mr-3" />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
            }`
          }
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          <span>Analytics</span>
        </NavLink>
      </nav>
    </aside>
  );
};
export default Sidebar;
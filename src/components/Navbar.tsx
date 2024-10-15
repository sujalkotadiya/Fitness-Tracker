import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, BarChart2, Target, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">FitTrack</Link>
        {user ? (
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center">
              <Activity className="mr-1" size={20} />
              Dashboard
            </Link>
            <Link to="/workout-log" className="flex items-center">
              <BarChart2 className="mr-1" size={20} />
              Log Workout
            </Link>
            <Link to="/statistics" className="flex items-center">
              <BarChart2 className="mr-1" size={20} />
              Statistics
            </Link>
            <Link to="/goals" className="flex items-center">
              <Target className="mr-1" size={20} />
              Goals
            </Link>
            <button onClick={logout} className="flex items-center">
              <LogOut className="mr-1" size={20} />
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
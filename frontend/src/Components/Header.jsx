import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // clear localStorage
    setIsAuthenticated(false); // update app state
    navigate('/'); // redirect to login page
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <span className="text-gray-800">Mittal's</span> Clinic
      </div>

      {/* Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

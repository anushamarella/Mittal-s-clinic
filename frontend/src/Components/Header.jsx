import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <span className="text-gray-800">Mittal's</span> Clinic
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

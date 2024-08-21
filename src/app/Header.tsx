import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="h-8 w-8" />
        <nav>
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <div className="relative inline-block">
            <button className="text-gray-800 hover:text-gray-600">Services</button>
            <div className="absolute hidden bg-white p-2 rounded shadow-md">
              <a href="#" className="block text-gray-800 hover:text-gray-600">Service 1</a>
              <a href="#" className="block text-gray-800 hover:text-gray-600">Service 2</a>
            </div>
          </div>
        </nav>
      </div>
      <nav>
        <a href="#" className="text-gray-800 hover:text-gray-600">Login</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;

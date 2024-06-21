import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4">
        <div>
          <a href="/" className="text-xl font-bold">Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li className="relative group">
            <a href="/" className="hover:text-gray-300">Products</a>
            <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
              <li><a href="/">Product 1</a></li>
              <li><a href="/">Product 2</a></li>
              <li><a href="/">Product 3</a></li>
            </ul>
          </li>
          <li><a href="/" className="hover:text-gray-300">About</a></li>
          <li><a href="/" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

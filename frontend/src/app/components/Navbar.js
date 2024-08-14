import { useState } from 'react';

const Navbar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md w-full">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            viewBox="0 0 24 24" stroke="currentColor" fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-6.627 0-12 5.373-12 12h24c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </div>
        <div className="hidden md:flex space-x-4 nav-links">
          <a href="/" className="hover:text-gray-700 px-2 py-1">Home</a>
          <a href="/contact" className="hover:text-gray-700 px-2 py-1">Contact</a>
          <a href="/about" className="hover:text-gray-700 px-2 py-1">About</a>
        </div>
        <div className="md:hidden">
          <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24" stroke="currentColor" fill="none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {menuOpen && (
            <div className="flex flex-col space-y-2 mt-3">
              <a href="/" className="hover:text-gray-700 px-2 py-1">Home</a>
              <a href="/contact" className="hover:text-gray-700 px-2 py-1">Contact</a>
              <a href="/about" className="hover:text-gray-700 px-2 py-1">About</a>
            </div>
          )}
        </div>
      </div>
      <button onClick={onLoginClick} className="bg-teal-600 text-white px-6 py-2 rounded-full">Login</button>
    </nav>
  );
};

export default Navbar;
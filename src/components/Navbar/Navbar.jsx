import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/0.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Services', path: '#' }, // Dropdown
    { id: 4, title: 'Frames', path: '/event-management' }, // Route to Event Management
    { id: 5, title: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <motion.nav
      className="flex justify-between items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-3 sticky top-0 z-20 bg-white/70 backdrop-blur-md dark:bg-gray-900/80 shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-50" />
      </Link>

      {/* Navbar Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium items-center">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            {link.title === 'Services' ? (
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-yellow-500"
                onClick={toggleDropdown}
              >
                <span>{link.title}</span>
                <span
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>
            ) : (
              <Link
                to={link.path}
                className="hover:text-yellow-500 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                {link.title}
              </Link>
            )}

            {/* Dropdown Menu */}
            {link.title === 'Services' && isDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-52 z-30">
                <li>
                  <Link
                    to="/digital-marketing"
                    className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-services"
                    className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/event-management"
                    className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Event Management
                  </Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu (optional placeholder) */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-700 dark:text-gray-200">☰</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

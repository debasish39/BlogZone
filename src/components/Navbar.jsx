import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebook, FaLinkedin, FaTwitter, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md fixed w-full top-0 left-0 z-50">

    <nav
  className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center shadow-2xl"
  onClick={menuOpen ? () => setMenuOpen(false) : undefined}
>

        {/* Logo */}
        <NavLink to="/" className="text-gray-300 font-bold text-2xl sm:text-3xl tracking-wide" onClick={closeMenu}   style={{ fontFamily: 'cursive' }}
>
          Blog<span className="text-orange-500">Zone</span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative group text-orange-400 hover:text-orange-500 focus:text-orange-500 active:text-orange-500 transition duration-300 pb-1 ${
                    isActive ? 'text-orange-400 font-semibold ' : ''
                  }`
                }
              >
                {name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-400 group-hover:w-full group-focus:w-full group-active:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Socials + Login (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#"><FaFacebook className="text-white text-2xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500 transition" /></a>
          <a href="#"><FaTwitter className="text-white text-2xl hover:text-blue-400 focus:text-blue-400 active:text-blue-400 transition" /></a>
          <a href="#"><FaLinkedin className="text-white text-2xl hover:text-blue-600 focus:text-blue-600 active:text-blue-600 transition" /></a>
          <button className="ml-4 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition">
            Login
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-orange-500 text-3xl focus:outline-none cursor-pointer">
            {menuOpen ? <FaXmark size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden backdrop-blur-lg bg-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-screen py-6 px-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          {navItems.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-black hover:text-orange-500 focus:text-orange-500 active:text-orange-500 transition duration-200 ${
                    isActive ? 'font-bold text-orange-600 underline' : ''
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Socials + Login */}
        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <div className="flex gap-4">
            <a href="#"><FaFacebook className="text-black text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500 transition" /></a>
            <a href="#"><FaTwitter className="text-black text-xl hover:text-blue-400 focus:text-blue-400 active:text-blue-400 transition" /></a>
            <a href="#"><FaLinkedin className="text-black text-xl hover:text-blue-600 focus:text-blue-600 active:text-blue-600 transition" /></a>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

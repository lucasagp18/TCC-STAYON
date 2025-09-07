import { Link } from "react-router";
import React, { useContext, useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

import {MoonStarsIcon, SunIcon} from "@phosphor-icons/react";

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="pb-15">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-white dark:bg-[#001228] shadow-sm z-50">

          {/* Desktop Logo - visible on md and up */}
          <div className="hidden md:block text-xl font-bold text-indigo-700 ">StayOn</div>

          {/* Desktop Navigation - visible on md and up */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-gray-600 dark:text-white font-semibold text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-700 dark:hover:text-gray-300">Início</Link>
              </li>
              <li>
                <Link to="/produto" className="hover:text-indigo-700 dark:hover:text-gray-300">Produto</Link>
              </li>
              <li>
                <Link to="/jogo" className="hover:text-indigo-700 dark:hover:text-gray-300">Jogo</Link>
              </li>
              <li>
                <Link to="/quem-somos" className="hover:text-indigo-700 dark:hover:text-gray-300">Quem somos</Link>
              </li>
              
              <button className="hover:text-indigo-700 dark:hover:text-gray-300 cursor-pointer" onClick={toggle}>
                {theme === "dark" ? (
                  <SunIcon size={24} weight="fill"/>
                ) : (
                  <MoonStarsIcon size={24} weight="fill" />
                )}
              </button>
            </ul>
          </nav>

          {/* Mobile: Logo and Theme Toggle grouped on left, Hamburger on right */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Left side: Logo and Theme Toggle together */}
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-indigo-700 ">StayOn</div>
              <button className="hover:text-indigo-700 dark:text-gray-300 cursor-pointer" onClick={toggle}>
                {theme === "dark" ? (
                  <SunIcon size={24} weight="fill"/>
                ) : (
                  <MoonStarsIcon size={24} weight="fill" />
                )}
              </button>
            </div>

            {/* Right side: Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white dark:bg-[#001228]">
          {/* Header of the overlay - matching main header height */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 dark:border-slate-600">
            {/* Left side: Logo and Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-indigo-700 ">StayOn</h1>
              <button className="hover:text-indigo-700 dark:text-gray-300 cursor-pointer" onClick={toggle}>
                {theme === "dark" ? (
                  <SunIcon size={24} weight="fill"/>
                ) : (
                  <MoonStarsIcon size={24} weight="fill" />
                )}
              </button>
            </div>

            {/* Right side: Close button */}
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links - centered vertically */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Início
            </Link>
            <Link
              to="/produto"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Produto
            </Link>
            <Link
              to="/jogo"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Jogo
            </Link>
            <Link
              to="/quem-somos"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Quem Somos
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
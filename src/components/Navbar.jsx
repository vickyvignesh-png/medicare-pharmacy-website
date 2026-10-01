import React, { useState } from 'react';
import { MEDICARE_LOGO_URL, BRAND_NAME } from '../constants/assets';

/**
 * Navbar Component
 * 
 * Provides responsive navigation, brand logo display, search query integration,
 * cart counter, and accessible mobile menu toggle.
 */
function Navbar({ cartCount, onOpenCart, searchQuery, onSearchChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="medicare-container">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-lg p-1"
            aria-label="MediCare+ Home"
          >
            <img
              src={MEDICARE_LOGO_URL}
              alt="MediCare+ Official Pharmacy Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            <a
              href="#hero"
              className="text-sm font-medium text-slate-700 hover:text-brand-navy-600 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-slate-700 hover:text-brand-navy-600 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 hover:text-brand-navy-600 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-brand-navy-600 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Contact
            </a>
          </nav>

          {/* Search & Cart Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input (Desktop) */}
            <div className="relative hidden sm:block w-48 lg:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                aria-label="Search pharmacy products"
                className="w-full pl-9 pr-4 py-1.5 text-xs lg:text-sm bg-slate-50 border border-slate-300 rounded-full focus:bg-white focus:border-brand-green-500 focus:outline-none focus:ring-1 focus:ring-brand-green-500 transition-all placeholder:text-slate-400"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search input"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`View Cart with ${cartCount} items`}
              className="relative p-2.5 text-slate-700 hover:text-brand-navy-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-green-600 text-white font-bold text-[11px] h-5 w-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-slate-700 hover:text-brand-navy-600 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-500"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar (Visible on mobile only) */}
        <div className="sm:hidden pb-3 pt-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search pharmacy products..."
              aria-label="Search pharmacy products"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-brand-green-500 focus:outline-none focus:ring-1 focus:ring-brand-green-500"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-1 bg-white animate-fadeIn">
            <a
              href="#hero"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-navy-600 hover:bg-slate-50 rounded-md"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-navy-600 hover:bg-slate-50 rounded-md"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-navy-600 hover:bg-slate-50 rounded-md"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-navy-600 hover:bg-slate-50 rounded-md"
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;

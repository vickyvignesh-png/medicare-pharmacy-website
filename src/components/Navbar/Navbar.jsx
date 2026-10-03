import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MEDICARE_LOGO_URL } from '../../constants/assets';
import { CATEGORIES } from '../../data/sampleProducts';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Features:
 * - Brand logo on the left (links to home)
 * - Desktop & mobile navigation links
 * - Integrated search input & compact category filter dropdown
 * - Cart drawer trigger with live item count badge
 * - Responsive mobile search and category filter layout
 * - Navigates to home if search/filter is interacted with while on a product detail page
 */
function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (value) => {
    onSearchChange(value);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleCategoryChange = (value) => {
    onSelectCategory(value);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="navbar-wrapper sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="medicare-container">
        
        {/* Main Desktop & Tablet Bar */}
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo on the left */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-lg p-1 shrink-0"
            aria-label="MediCare+ Pharmacy Home"
          >
            <img
              src={MEDICARE_LOGO_URL}
              alt="MediCare+ Official Pharmacy Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 shrink-0" aria-label="Main Navigation">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-brand-green-700 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-brand-green-700 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Products
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-brand-green-700 transition-colors focus:outline-none focus:text-brand-green-600"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Area: Search + Category Filter + Cart Button */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 flex-1 justify-end max-w-2xl">
            
            {/* 1. Product Search Input */}
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search 5 products..."
                aria-label="Search pharmacy products"
                className="w-full pl-9 pr-7 py-2 text-xs lg:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-300 rounded-xl focus:border-brand-green-500 focus:outline-none focus:ring-2 focus:ring-brand-green-500/20 transition-all placeholder:text-slate-400 text-slate-800"
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
                  onClick={() => handleSearchChange('')}
                  aria-label="Clear search input"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 text-xs rounded-full"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 2. Product Category Dropdown Filter */}
            <div className="relative w-44 lg:w-48 shrink-0">
              <label htmlFor="nav-category-select" className="sr-only">Select Product Category</label>
              <select
                id="nav-category-select"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                aria-label="Filter products by category"
                className="navbar-select w-full appearance-none bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-300 rounded-xl py-2 pl-3 pr-8 text-xs lg:text-sm font-medium text-slate-700 focus:outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 cursor-pointer transition-all truncate"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.filter((c) => c !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {/* Chevron icon */}
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* 3. Shopping Cart Drawer Button */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`View Cart with ${cartCount} items`}
              className="relative p-2.5 text-slate-700 hover:text-brand-green-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500 shrink-0"
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

          </div>

          {/* Mobile Right Controls: Cart Button + Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`View Cart with ${cartCount} items`}
              className="relative p-2 text-slate-700 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-green-600 text-white font-bold text-[10px] h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-700 hover:text-brand-navy-600 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-500"
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

        {/* Mobile Search and Category Controls (Always accessible on mobile) */}
        <div className="md:hidden pb-3 pt-1 space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            
            {/* Search Input Mobile */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search 5 products..."
                aria-label="Search pharmacy products"
                className="w-full pl-9 pr-7 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-brand-green-500 focus:outline-none focus:ring-1 focus:ring-brand-green-500"
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
                  onClick={() => handleSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-0.5 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Dropdown Mobile */}
            <div className="relative sm:w-44">
              <label htmlFor="nav-category-select-mobile" className="sr-only">Category</label>
              <select
                id="nav-category-select-mobile"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                aria-label="Filter products by category"
                className="navbar-select w-full appearance-none bg-slate-50 border border-slate-300 rounded-lg py-2 pl-3 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:border-brand-green-500 cursor-pointer"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.filter((c) => c !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Links Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-1 bg-white">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-green-700 hover:bg-slate-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-green-700 hover:bg-slate-50 rounded-md"
            >
              Products
            </Link>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-green-700 hover:bg-slate-50 rounded-md"
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

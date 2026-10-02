import React from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/sampleProducts';

/**
 * ProductSection Component
 * 
 * Manages category filters, displays the 10 pharmacy products,
 * and renders loading, empty, and error UI states.
 */
function ProductSection({
  products,
  loading,
  error,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  onAddToCart,
  onRetry,
}) {
  return (
    <section id="products" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="medicare-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold tracking-wider text-brand-green-700 uppercase bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
            Pharmacy Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mt-3 mb-2">
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Browse our core selection of daily health, first aid, and wellness essentials. Prepared for live admin and backend data integration.
          </p>
        </div>

        {/* Product Catalog Controls: Search Bar & Category Dropdown */}
        <div className="mb-8 max-w-3xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products by name, category or description..."
                aria-label="Search pharmacy products"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-brand-green-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-500/20 transition-all text-slate-800 placeholder:text-slate-400"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
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
                  onClick={onClearSearch}
                  aria-label="Clear search input"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs rounded-full hover:bg-slate-200 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Dropdown Filter */}
            <div className="relative sm:w-56 shrink-0">
              <label htmlFor="category-select" className="sr-only">Filter by Category</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                aria-label="Filter products by category"
                className="w-full appearance-none bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-brand-green-500 rounded-xl py-2.5 pl-3.5 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-green-500/20 cursor-pointer transition-all"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.filter((c) => c !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {/* Custom Chevron Icon */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Active Search/Filter info indicator */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Filtering by:</span>
              {selectedCategory !== 'All' && (
                <span className="bg-brand-navy-50 text-brand-navy-700 font-medium px-2 py-0.5 rounded border border-brand-navy-100">
                  Category: {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="bg-brand-green-50 text-brand-green-800 font-medium px-2 py-0.5 rounded border border-brand-green-100">
                  Search: "{searchQuery}"
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('All');
                onClearSearch();
              }}
              className="text-brand-green-700 hover:underline font-semibold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center" aria-live="polite">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-brand-green-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 text-sm font-medium">Loading pharmacy products...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto my-12 p-6 bg-rose-50 border border-rose-200 rounded-xl text-center" role="alert">
            <svg className="w-10 h-10 text-rose-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-base font-semibold text-rose-900 mb-1">Failed to load products</h3>
            <p className="text-xs text-rose-700 mb-4">{error}</p>
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg"
              >
                Retry
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-xl text-center shadow-subtle">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-brand-navy-900 mb-1">No products found</h3>
            <p className="text-xs text-slate-500 mb-4">
              We could not find any pharmacy products matching your current search query or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('All');
                onClearSearch();
              }}
              className="px-4 py-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs font-medium rounded-lg"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="grid product-grid gap-5 sm:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ProductSection;

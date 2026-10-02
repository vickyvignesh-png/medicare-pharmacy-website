import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

/**
 * ProductGrid Component
 * 
 * Main section rendered directly below the Navbar.
 * Displays "Our Products" heading, brief description, active filter tags,
 * and responsive grid of pharmacy product cards.
 */
function ProductGrid({
  products,
  loading,
  error,
  selectedCategory,
  onResetCategory,
  searchQuery,
  onClearSearch,
  onResetAllFilters,
  onAddToCart,
  onRetry,
}) {
  return (
    <section id="products" className="product-grid-wrapper py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="medicare-container">
        
        {/* Section Heading & Minimal Subtitle */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy-900 tracking-tight mb-2">
            Our Products
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse our core selection of daily health, first aid, and wellness essentials.
          </p>
        </div>

        {/* Active Filter Indicator (If filtered from Navbar) */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 shadow-xs max-w-3xl mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-slate-500">Active Filters:</span>
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1.5 bg-brand-navy-50 text-brand-navy-800 font-semibold px-2.5 py-1 rounded-lg border border-brand-navy-100">
                  Category: {selectedCategory}
                  <button
                    type="button"
                    onClick={onResetCategory}
                    aria-label="Remove category filter"
                    className="text-slate-400 hover:text-slate-700 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 bg-brand-green-50 text-brand-green-800 font-semibold px-2.5 py-1 rounded-lg border border-brand-green-200">
                  Search: "{searchQuery}"
                  <button
                    type="button"
                    onClick={onClearSearch}
                    aria-label="Clear search filter"
                    className="text-brand-green-600 hover:text-brand-green-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onResetAllFilters}
              className="text-brand-green-700 hover:text-brand-green-800 hover:underline font-semibold text-xs transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="py-24 text-center" aria-live="polite">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-brand-green-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 text-sm font-medium">Loading pharmacy products...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto my-12 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center" role="alert">
            <svg className="w-10 h-10 text-rose-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-base font-semibold text-rose-900 mb-1">Failed to load products</h2>
            <p className="text-xs text-rose-700 mb-4">{error}</p>
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-xs"
              >
                Retry
              </button>
            )}
          </div>
        )}

        {/* Empty State (No Matches) */}
        {!loading && !error && products.length === 0 && (
          <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-2xl text-center shadow-subtle">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-base font-semibold text-brand-navy-900 mb-1">No products found</h2>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              We could not find any pharmacy products matching your current search query or category filter.
            </p>
            <button
              type="button"
              onClick={onResetAllFilters}
              className="px-4 py-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs font-medium rounded-xl shadow-xs transition-colors"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="product-grid-layout">
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

export default ProductGrid;

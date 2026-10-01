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
  onClearSearch,
  onAddToCart,
  onRetry,
}) {
  return (
    <section id="products" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="medicare-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
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

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 medicare-scrollbar no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                aria-pressed={isActive}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500 ${
                  isActive
                    ? 'bg-brand-navy-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Active Search/Filter info indicator */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
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

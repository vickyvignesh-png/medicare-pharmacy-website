import React from 'react';
import { formatCurrencyINR } from '../../utils/formatCurrency';
import './ProductCard.css';

/**
 * Category-based SVG icon rendering
 */
function PharmacyPlaceholderIcon({ type }) {
  switch (type) {
    case 'pill':
      return (
        <svg className="w-12 h-12 text-brand-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case 'bandage':
      return (
        <svg className="w-12 h-12 text-brand-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
        </svg>
      );
    case 'bottle':
      return (
        <svg className="w-12 h-12 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 5h6a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1zm-2 4h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2z" />
        </svg>
      );
    case 'cream':
      return (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'thermometer':
      return (
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 'dropper':
    default:
      return (
        <svg className="w-12 h-12 text-brand-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
  }
}

/**
 * ProductCard Component
 * 
 * Displays individual pharmacy product with category badge, placeholder icon,
 * rating, stock label, title, description, formatted INR price, and Add to Cart button.
 */
function ProductCard({ product, onAddToCart }) {
  const { id, name, category, price, description, inStock, rating, badge, iconType } = product;

  return (
    <article className="product-card-container bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover flex flex-col justify-between overflow-hidden group">
      
      {/* Top Image Placeholder Area */}
      <div className="product-card-image-box bg-slate-50/80 group-hover:bg-slate-100/60 transition-colors border-b border-slate-100">
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
          {category}
        </span>

        {/* Promotional Badge (if present) */}
        {badge && (
          <span className="absolute top-3 right-3 bg-brand-green-50 text-brand-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-brand-green-200">
            {badge}
          </span>
        )}

        {/* Neutral Icon Placeholder */}
        <div className="p-4 rounded-full bg-white shadow-xs border border-slate-100 group-hover:scale-105 transition-transform">
          <PharmacyPlaceholderIcon type={iconType} />
        </div>

        <span className="sr-only">Product icon for {name}</span>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Rating & Stock Status */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-amber-500 font-bold">★</span>
              <span className="font-semibold text-slate-700">{rating}</span>
            </div>
            <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${inStock ? 'text-emerald-700' : 'text-rose-600'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${inStock ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-brand-navy-900 text-sm sm:text-base leading-snug mb-1.5 line-clamp-2">
            {name}
          </h3>

          {/* Product Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Price and Add to Cart Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-[11px] text-slate-400 block font-normal">Price</span>
            <span className="text-base sm:text-lg font-bold text-brand-navy-900">
              {formatCurrencyINR(price)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            disabled={!inStock}
            aria-label={`Add ${name} to Cart for ${formatCurrencyINR(price)}`}
            className="px-3.5 py-2 bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-800 text-white font-medium text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-green-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>

      </div>

    </article>
  );
}

export default ProductCard;

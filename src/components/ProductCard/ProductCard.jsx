import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyINR } from '../../utils/formatCurrency';
import './ProductCard.css';

/**
 * ProductCard Component
 * 
 * Displays individual pharmacy product card with:
 * - Real local product image
 * - Category badge
 * - Stock status indicator
 * - Rating & reviews summary
 * - Product title & short description
 * - Indian Rupee price formatted with ₹
 * - Quick "Add" button (prevents navigation bubbling)
 * - Clickable card navigating to dynamic Product Details page
 */
function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const {
    name,
    slug,
    category,
    price,
    shortDescription,
    description,
    inStock,
    rating,
    badge,
    images,
  } = product;

  const displayImage = images && images.length > 0 ? images[0] : '';
  const displayDesc = shortDescription || description;

  const handleCardClick = () => {
    navigate(`/products/${slug}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${name}`}
      className="product-card-container group bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green-500 transition-all"
    >
      {/* Product Image Area */}
      <div className="product-card-image-box bg-slate-50 group-hover:bg-slate-100/70 transition-colors border-b border-slate-100 relative">
        {/* Real Product Image */}
        {displayImage ? (
          <img
            src={displayImage}
            alt={name}
            loading="lazy"
            className="product-card-img object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="product-card-no-img flex items-center justify-center text-slate-400 text-xs font-medium">
            No image available
          </div>
        )}
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Stock Status */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-amber-500 font-bold" aria-hidden="true">★</span>
              <span className="font-semibold text-slate-700">{rating || 4.8}</span>
            </div>
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                inStock ? 'text-emerald-700' : 'text-rose-600'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  inStock ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
              ></span>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-brand-navy-900 text-sm sm:text-base leading-snug mb-1.5 line-clamp-2 group-hover:text-brand-green-700 transition-colors">
            {name}
          </h3>

          {/* Product Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {displayDesc}
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
            onClick={handleAddToCartClick}
            disabled={!inStock}
            aria-label={`Add ${name} to Cart for ${formatCurrencyINR(price)}`}
            className="product-card-add-btn px-3.5 py-2 bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-800 text-white font-medium text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-green-500"
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

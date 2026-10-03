import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '../../services/productService';
import { formatCurrencyINR } from '../../utils/formatCurrency';
import './ProductDetails.css';

/**
 * ProductDetails Component
 * 
 * Reusable dynamic product details view containing:
 * - Breadcrumb navigation (Home > Products > Product Name)
 * - Interactive 3-image gallery (large main view + interactive thumbnails)
 * - Product category badge, title, rating, stock status
 * - INR pricing with ₹ symbol
 * - Quantity selector (+ / -)
 * - Add to Cart and Buy Now action buttons
 * - Detailed description, product highlights, and usage instructions
 */
function ProductDetails({ onAddToCart, onBuyNow }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Load product data dynamically by slug
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setSelectedImageIndex(0);
    setQuantity(1);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    getProductBySlug(slug).then((data) => {
      if (isMounted) {
        setProduct(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    const maxStock = product?.stock || 50;
    setQuantity((prev) => (prev < maxStock ? prev + 1 : prev));
  };

  const handleAddToCart = () => {
    if (product && onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  const handleBuyNow = () => {
    if (product && onBuyNow) {
      onBuyNow(product, quantity);
    } else if (product && onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <main className="product-details-wrapper py-16 bg-slate-50 min-h-[60vh]">
        <div className="medicare-container">
          <div className="py-24 text-center" aria-live="polite">
            <div className="inline-block w-9 h-9 border-4 border-slate-200 border-t-brand-green-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-600 text-sm font-medium">Loading product details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="product-details-wrapper py-16 bg-slate-50 min-h-[60vh]">
        <div className="medicare-container">
          <div className="max-w-md mx-auto my-12 p-8 bg-white border border-slate-200 rounded-2xl text-center shadow-subtle">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-brand-navy-900 mb-2">Product Not Found</h1>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              We could not locate the pharmacy item you are looking for. It may have been relocated or updated.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const {
    name,
    category,
    price,
    description,
    inStock,
    stock = 50,
    rating = 4.8,
    badge,
    highlights,
    usage,
    images = [],
  } = product;

  const currentMainImage = images[selectedImageIndex] || images[0] || '';

  return (
    <main className="product-details-wrapper py-8 sm:py-12 bg-slate-50">
      <div className="medicare-container">
        
        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="product-details-breadcrumb mb-6 sm:mb-8">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link
                to="/"
                className="hover:text-brand-green-700 font-medium transition-colors focus:outline-none focus:text-brand-green-700"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-400" aria-hidden="true">/</li>
            <li>
              <Link
                to="/"
                className="hover:text-brand-green-700 font-medium transition-colors focus:outline-none focus:text-brand-green-700"
              >
                Products
              </Link>
            </li>
            <li className="text-slate-400" aria-hidden="true">/</li>
            <li className="text-brand-navy-900 font-semibold truncate max-w-[200px] sm:max-w-md" aria-current="page">
              {name}
            </li>
          </ol>
        </nav>

        {/* 2. Main Product Details Layout (2 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Image Gallery (5 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4">
            
            {/* Large Main Showcase Image */}
            <div className="product-main-image-card bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 flex items-center justify-center relative overflow-hidden">
              {badge && (
                <span className="absolute top-4 left-4 bg-brand-green-50 text-brand-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-brand-green-200 shadow-xs z-10">
                  {badge}
                </span>
              )}
              <img
                src={currentMainImage}
                alt={`${name} - View ${selectedImageIndex + 1}`}
                className="product-main-img object-contain transition-all duration-300"
              />
            </div>

            {/* 3 Thumbnails Selector */}
            {images.length > 1 && (
              <div className="product-thumbnails-grid grid grid-cols-3 gap-3 sm:gap-4">
                {images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={`View image ${idx + 1} of ${name}`}
                    aria-pressed={selectedImageIndex === idx}
                    className={`product-thumb-btn bg-white rounded-xl border p-2 flex items-center justify-center transition-all cursor-pointer focus:outline-none ${
                      selectedImageIndex === idx
                        ? 'border-brand-green-600 ring-2 ring-brand-green-500/30 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 shadow-2xs opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${name} thumbnail ${idx + 1}`}
                      className="product-thumb-img object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Guaranteed Trust Badges */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-around text-center text-xs text-emerald-900">
              <div className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Quality</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fast Dispatch</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Product Details & Purchase Actions (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-8 space-y-6">
            
            {/* Category & Stock Tag */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="bg-brand-navy-50 text-brand-navy-800 text-xs font-semibold px-3 py-1 rounded-full border border-brand-navy-100">
                {category}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                  inStock
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    inStock ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}
                ></span>
                {inStock ? `In Stock (${stock} available)` : 'Currently Out of Stock'}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-navy-900 tracking-tight leading-tight">
              {name}
            </h1>

            {/* Rating Stars & Customer Trust */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-amber-400">★</span>
                <span className="ml-1 text-slate-800 font-bold">{rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">Verified Pharmacy Supply</span>
            </div>

            {/* Price Showcase */}
            <div className="py-2">
              <span className="text-xs text-slate-400 font-medium block mb-1">
                Inclusive of all taxes
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
                  {formatCurrencyINR(price)}
                </span>
                <span className="text-xs text-brand-green-700 font-semibold bg-brand-green-50 px-2.5 py-1 rounded-lg border border-brand-green-200">
                  Best Price Guaranteed
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-brand-navy-900 uppercase tracking-wider">
                Product Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Key Product Highlights (if available) */}
            {highlights && highlights.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <h2 className="text-sm font-bold text-brand-navy-900 uppercase tracking-wider">
                  Key Benefits & Highlights
                </h2>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-green-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage / Dosage Instructions (if available) */}
            {usage && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h3 className="text-xs font-bold text-brand-navy-900 uppercase tracking-wider">
                  Suggested Usage & Dosage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {usage}
                </p>
              </div>
            )}

            {/* Purchase Controls: Quantity Selector + Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label htmlFor="product-quantity-input" className="text-xs sm:text-sm font-semibold text-brand-navy-900">
                  Quantity:
                </label>
                <div className="product-quantity-picker flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1 || !inStock}
                    aria-label="Decrease item quantity"
                    className="product-qty-btn px-3.5 py-2 text-slate-600 hover:bg-slate-100 text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <input
                    id="product-quantity-input"
                    type="number"
                    min="1"
                    max={stock}
                    value={quantity}
                    readOnly
                    aria-label="Current selected quantity"
                    className="product-qty-display w-12 text-center text-xs sm:text-sm font-bold text-brand-navy-900 bg-transparent border-0 focus:ring-0 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleIncreaseQuantity}
                    disabled={quantity >= stock || !inStock}
                    aria-label="Increase item quantity"
                    className="product-qty-btn px-3.5 py-2 text-slate-600 hover:bg-slate-100 text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  Subtotal: <strong className="text-slate-700 font-bold">{formatCurrencyINR(price * quantity)}</strong>
                </span>
              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!inStock}
                  className="product-btn-add-cart w-full py-3 px-5 bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to Cart
                </button>

                {/* Buy Now */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  disabled={!inStock}
                  className="product-btn-buy-now w-full py-3 px-5 bg-brand-navy-900 hover:bg-brand-navy-800 active:bg-black text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-navy-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;

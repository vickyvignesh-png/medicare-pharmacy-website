import React from 'react';

/**
 * Toast Component
 * 
 * Provides temporary non-intrusive feedback when a product is added to the cart.
 */
function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-navy-900 text-white px-4 py-3 rounded-xl shadow-xl border border-brand-navy-700 animate-slideUp"
    >
      <div className="w-6 h-6 rounded-full bg-brand-green-600 flex items-center justify-center text-white shrink-0">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-xs sm:text-sm font-medium pr-2">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss message"
        className="text-slate-400 hover:text-white text-xs ml-1"
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;

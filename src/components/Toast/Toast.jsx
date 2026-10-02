import React from 'react';
import './Toast.css';

/**
 * Toast Notification Component
 * 
 * Displays feedback messages when adding items to cart.
 */
function Toast({ visible, message, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fadeIn" role="status" aria-live="polite">
      <div className="toast-container flex items-center gap-3 bg-brand-navy-900 text-white px-4 py-3 rounded-xl border border-brand-navy-800 text-xs sm:text-sm">
        <span className="w-2 h-2 rounded-full bg-brand-green-500 shrink-0"></span>
        <span className="font-medium">{message}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="ml-2 text-slate-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;

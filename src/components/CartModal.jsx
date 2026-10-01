import React from 'react';

/**
 * CartModal Component
 * 
 * Accessible slide-over drawer displaying selected items, quantities,
 * subtotal calculation, and clear/checkout actions.
 */
function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end transition-opacity"
      aria-labelledby="cart-drawer-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop overlay click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 id="cart-drawer-title" className="text-base font-bold text-brand-navy-900">
              Shopping Cart ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 medicare-scrollbar">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-700 mb-1">Your cart is empty</p>
              <p className="text-xs text-slate-500 mb-4">Add some pharmacy essentials to get started.</p>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-brand-green-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-green-700"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-brand-navy-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.category}</p>
                  <p className="text-xs font-bold text-brand-navy-800 mt-1">
                    ${Number(item.price).toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="px-2.5 py-1 text-xs font-semibold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex justify-between text-xs text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>Estimated Shipping</span>
              <span className="text-brand-green-700 font-semibold">Free</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-brand-navy-900 pt-2 border-t border-slate-200">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={() => alert('Demo Storefront: Order placement will connect to the backend checkout API in the next phase.')}
              className="w-full py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-500"
            >
              Proceed to Checkout
            </button>

            <button
              type="button"
              onClick={onClearCart}
              className="w-full py-2 text-xs text-slate-500 hover:text-rose-600 transition-colors text-center block"
            >
              Clear Cart
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CartModal;

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import Toast from './components/Toast/Toast';
import { getProducts } from './services/productService';

/**
 * Storefront Layout & Application Shell
 */
function AppContent() {
  // State for products loaded from service layer
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters state (controlled in Navbar, applied to ProductGrid)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Shopping Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState({ visible: false, message: '' });

  // Function to load products
  const fetchProductsList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch products on initial mount
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);

  // Show temporary toast message
  const triggerToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product, qty = 1) => {
    const addCount = Number(qty) > 0 ? Number(qty) : 1;
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addCount }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: addCount }];
    });
    triggerToast(`Added ${addCount > 1 ? `${addCount}x ` : ''}"${product.name}" to cart`);
  };

  const handleBuyNow = (product, qty = 1) => {
    handleAddToCart(product, qty);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Total cart item count
  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  // Filtered products list (Search + Category Filter synced across the 5 products)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.description && product.description.toLowerCase().includes(q)) ||
        (product.shortDescription && product.shortDescription.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-green-100 selection:text-brand-green-900">
      
      {/* 1. Navbar with Search, Category Filter & Live Cart */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Main Content: Route between Product Grid and Dynamic Product Details */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <ProductGrid
                products={filteredProducts}
                loading={loading}
                error={error}
                selectedCategory={selectedCategory}
                onResetCategory={() => setSelectedCategory('All')}
                searchQuery={searchQuery}
                onClearSearch={() => setSearchQuery('')}
                onResetAllFilters={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                onAddToCart={(prod) => handleAddToCart(prod, 1)}
                onRetry={fetchProductsList}
              />
            }
          />
          <Route
            path="/products/:slug"
            element={
              <ProductDetails
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 3. Footer */}
      <Footer />

      {/* Shopping Cart Slide-over Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Feedback Toast */}
      <Toast
        visible={toast.visible}
        message={toast.message}
        onClose={() => setToast({ visible: false, message: '' })}
      />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

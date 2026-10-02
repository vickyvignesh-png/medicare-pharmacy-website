import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import Toast from './components/Toast/Toast';
import { getProducts } from './services/productService';

/**
 * Main Application Component for MediCare+ Pharmacy Storefront
 * 
 * Ordered layout:
 * 1. Navbar (Logo + Navigation + Search + Category Filter + Cart)
 * 2. ProductGrid ("Our Products" Heading + Description + 10-item Responsive Grid)
 * 3. Footer (Logo + Tagline + Navigation Links + Contact Details + Copyright)
 */
function App() {
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
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    triggerToast(`Added "${product.name}" to cart`);
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

  // Filtered products list (Search + Category Filter synced)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-green-100 selection:text-brand-green-900">
      
      {/* 1. Header & Navbar with Search, Category Filter & Cart */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Main Product Grid Section immediately below Navbar */}
      <main className="flex-grow">
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
          onAddToCart={handleAddToCart}
          onRetry={fetchProductsList}
        />
      </main>

      {/* 3. Simple Footer immediately after Product Grid */}
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

export default App;


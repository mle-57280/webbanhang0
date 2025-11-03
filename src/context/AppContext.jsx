import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [compareList, setCompareList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Compare functions
  const addToCompare = (product) => {
    if (compareList.length >= 3) {
      alert('Chỉ có thể so sánh tối đa 3 sản phẩm');
      return;
    }
    if (!compareList.find(p => p.id === product.id)) {
      setCompareList([...compareList, product]);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareList(compareList.filter(p => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

// Orders functions
const placeOrder = (address) => {
  if (cart.length === 0) {
    alert('Giỏ hàng trống, không thể đặt hàng!');
    return;
  }

  if (!address || address.trim() === '') {
    alert('Vui lòng nhập địa chỉ giao hàng trước khi đặt hàng!');
    return;
  }

  const newOrder = {
    id: `DH${Date.now()}`, // Mã đơn hàng duy nhất
    date: new Date().toLocaleDateString('vi-VN'),
    products: cart,
    total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    payment: 'Thanh toán khi nhận hàng',
    status: 'pending',
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('vi-VN'),
    deliveryAddress: address.trim(), // ✅ lấy từ người dùng
  };

  setOrders(prev => [...prev, newOrder]);
  clearCart();
  alert('🎉 Đặt hàng thành công!');
};


  const value = {
    // Cart
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    orders,
    placeOrder,
    // Compare
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare,
    // Search
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Cart from './Cart';
import SearchModal from './SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartItemsCount } = useApp();

  const navigation = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Giới Thiệu', path: '/about' },
    { name: 'Sản Phẩm', path: '/products' },
    { name: 'Đơn Hàng', path: '/orders' },
    { name: 'Tin Tức', path: '/news' },
    { name: 'Tiện Ích', path: '/utilities' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary-600">MobileZone</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {getCartItemsCount() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-around mt-4 pt-4 border-t">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cart and Search Modals */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;

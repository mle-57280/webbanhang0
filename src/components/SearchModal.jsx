import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products, formatPrice } from '../data/products';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleProductClick = (product) => {
    navigate('/products');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Search Panel */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50 max-w-3xl mx-auto mt-4 md:mt-20 rounded-lg">
        <div className="p-4">
          {/* Search Input */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full pl-12 pr-4 py-3 border-2 border-primary-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query && results.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>Không tìm thấy sản phẩm phù hợp</p>
              </div>
            ) : (
              <div className="space-y-2">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="w-16 h-16 object-contain" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-600">{formatPrice(product.price)}</p>
                      <p className="text-xs text-gray-500 line-through">
                        {formatPrice(product.oldPrice)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular Searches */}
          {!query && (
            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tìm kiếm phổ biến</h3>
              <div className="flex flex-wrap gap-2">
                {['iPhone 15', 'Samsung S24', 'Xiaomi 14', 'OPPO Reno11'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;

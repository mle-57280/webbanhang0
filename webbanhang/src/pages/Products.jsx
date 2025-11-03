import React, { useState, useMemo } from 'react';
import { Star, SlidersHorizontal, ShoppingCart } from 'lucide-react';
import { products as allProducts, getBrandList, getPriceRanges, getFeatures, formatPrice, calculateDiscount } from '../data/products';
import { useApp } from '../context/AppContext';

const Products = () => {
  const { addToCart } = useApp();
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const brands = ['all', ...getBrandList()];
  const priceRanges = getPriceRanges();
  const features = getFeatures();

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Price filter
    if (selectedPrice !== 'all') {
      const range = priceRanges.find(r => r.value === selectedPrice);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Feature filter
    if (selectedFeature !== 'all') {
      filtered = filtered.filter(p => p.features.includes(selectedFeature));
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedBrand, selectedPrice, selectedFeature, sortBy, priceRanges]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="section-title mb-2">Sản Phẩm</h1>
            <p className="text-gray-600">
              Tìm thấy <span className="font-semibold text-primary-600">{filteredProducts.length}</span> sản phẩm
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Sắp xếp:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name">Tên A-Z</option>
              <option value="rating">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <SlidersHorizontal className="h-5 w-5 text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold">Bộ Lọc Sản Phẩm</h2>
            </div>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedPrice('all');
                setSelectedFeature('all');
                setSortBy('default');
              }}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Xóa bộ lọc
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Thương Hiệu</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Tất cả</option>
                {brands.filter(b => b !== 'all').map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Giá Bán</label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Feature Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tính Năng</label>
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {features.map((feature) => (
                  <option key={feature.value} value={feature.value}>
                    {feature.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">Không tìm thấy sản phẩm phù hợp</p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedPrice('all');
                setSelectedFeature('all');
              }}
              className="btn-primary"
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card group cursor-pointer">
                <div className="relative p-6 bg-gray-50">
                  <div className="text-8xl text-center mb-4">{product.image}</div>
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{calculateDiscount(product.price, product.oldPrice)}%
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  <div className="space-y-1 mb-3 text-xs text-gray-600">
                    <div>• {product.specs.screen}</div>
                    <div>• {product.specs.camera}</div>
                    <div>• {product.specs.chip}</div>
                    <div>• {product.specs.ram} - {product.specs.storage}</div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xl font-bold text-primary-600">{formatPrice(product.price)}</p>
                    <p className="text-sm text-gray-500 line-through">{formatPrice(product.oldPrice)}</p>
                  </div>

                  <div className="space-y-2 mb-3 text-xs">
                    <div className="flex items-center text-green-600">
                      <span className="mr-1">✓</span> {product.warranty}
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span className="mr-1">✓</span> {product.shipping}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-1">📦</span> Còn {product.stock} sản phẩm
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className="w-full btn-primary py-2 text-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

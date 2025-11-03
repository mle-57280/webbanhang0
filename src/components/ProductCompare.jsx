import React, { useState } from 'react';
import { X, Check, Minus } from 'lucide-react';
import { products, formatPrice } from '../data/products';

const ProductCompare = () => {
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);

  const compareFeatures = [
    { key: 'name', label: 'Tên sản phẩm' },
    { key: 'price', label: 'Giá bán', format: formatPrice },
    { key: 'brand', label: 'Thương hiệu' },
    { key: 'specs.screen', label: 'Màn hình' },
    { key: 'specs.camera', label: 'Camera' },
    { key: 'specs.chip', label: 'Chip xử lý' },
    { key: 'specs.ram', label: 'RAM' },
    { key: 'specs.storage', label: 'Bộ nhớ' },
    { key: 'specs.battery', label: 'Pin' },
    { key: 'specs.os', label: 'Hệ điều hành' },
    { key: 'warranty', label: 'Bảo hành' },
    { key: 'stock', label: 'Tồn kho' }
  ];

  const getValue = (product, key) => {
    if (!product) return null;
    const keys = key.split('.');
    let value = product;
    for (const k of keys) {
      value = value?.[k];
    }
    return value;
  };

  const clearAll = () => {
    setProduct1(null);
    setProduct2(null);
    setProduct3(null);
  };

  const products1 = [product1, product2, product3].filter(Boolean);
  const canCompare = products1.length >= 2;

  return (
    <div>
      {/* Product Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Product 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sản phẩm 1
          </label>
          <div className="relative">
            <select
              value={product1?.id || ''}
              onChange={(e) => {
                const selected = products.find(p => p.id === parseInt(e.target.value));
                setProduct1(selected || null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Chọn sản phẩm</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            {product1 && (
              <button
                onClick={() => setProduct1(null)}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Product 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sản phẩm 2
          </label>
          <div className="relative">
            <select
              value={product2?.id || ''}
              onChange={(e) => {
                const selected = products.find(p => p.id === parseInt(e.target.value));
                setProduct2(selected || null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Chọn sản phẩm</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            {product2 && (
              <button
                onClick={() => setProduct2(null)}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Product 3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sản phẩm 3 (tùy chọn)
          </label>
          <div className="relative">
            <select
              value={product3?.id || ''}
              onChange={(e) => {
                const selected = products.find(p => p.id === parseInt(e.target.value));
                setProduct3(selected || null);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Chọn sản phẩm</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            {product3 && (
              <button
                onClick={() => setProduct3(null)}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {products1.length > 0 && (
        <div className="flex justify-end mb-4">
          <button onClick={clearAll} className="btn-secondary text-sm">
            Xóa tất cả
          </button>
        </div>
      )}

      {/* Comparison Table */}
      {canCompare ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
                  Thông số
                </th>
                {[product1, product2, product3].map((product, index) => 
                  product ? (
                    <th key={index} className="px-4 py-3 border-b">
                      <div className="text-center">
                        <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-2" />
                        <div className="font-semibold text-sm">{product.name}</div>
                        <div className="text-primary-600 font-bold mt-1">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                    </th>
                  ) : null
                )}
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b">
                    {feature.label}
                  </td>
                  {[product1, product2, product3].map((product, pIndex) => {
                    if (!product) return null;
                    const value = getValue(product, feature.key);
                    const formattedValue = feature.format ? feature.format(value) : value;
                    
                    return (
                      <td key={pIndex} className="px-4 py-3 text-center border-b">
                        {formattedValue || <Minus className="h-4 w-4 text-gray-300 mx-auto" />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-500 text-lg">
            Chọn ít nhất 2 sản phẩm để bắt đầu so sánh
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCompare;

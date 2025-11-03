import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../data/products';

const Cart = ({ isOpen, onClose }) => {
  const { cart, updateCartQuantity, removeFromCart, getCartTotal, clearCart, placeOrder } = useApp();
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

const handlePlaceOrder = () => {
  if (!address.trim()) {
    alert('Vui lòng nhập địa chỉ giao hàng trước khi đặt hàng.');
    return;
  }
  placeOrder(address);
  onClose();
};

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-bold">Giỏ Hàng</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag className="h-16 w-16 mb-4 text-gray-300" />
              <p className="text-lg font-medium">Giỏ hàng trống</p>
              <p className="text-sm">Thêm sản phẩm để tiếp tục</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.name} className="w-20 h-20 object-contain" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-primary-600 font-bold mb-2">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded-l-lg"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded-r-lg"
                            disabled={item.quantity >= item.stock}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
{cart.length > 0 && (
  <div className="border-t p-4 space-y-4">
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
        Địa chỉ giao hàng:
      </label>
      <input
        id="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Nhập địa chỉ của bạn..."
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    </div>

    <div className="flex items-center justify-between text-lg font-bold">
      <span>Tổng cộng:</span>
      <span className="text-primary-600">{formatPrice(getCartTotal())}</span>
    </div>

    <button
      onClick={handlePlaceOrder}
      className="w-full btn-primary py-3 text-lg font-semibold"
    >
      Đặt hàng
    </button>

    <button
      onClick={clearCart}
      className="w-full btn-secondary py-2 text-sm"
    >
      Xóa Tất Cả
    </button>
  </div>
)}
      </div>
    </>
  );
};

export default Cart;
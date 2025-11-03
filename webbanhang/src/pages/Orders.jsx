import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck, Search, Eye } from 'lucide-react';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const orders = [
    {
      id: 'DH001234',
      date: '02/11/2024',
      products: [
        { name: 'iPhone 15 Pro Max 256GB', quantity: 1, price: '29.990.000₫' }
      ],
      total: '29.990.000₫',
      payment: 'Thẻ tín dụng',
      status: 'completed',
      estimatedDelivery: '03/11/2024',
      deliveryAddress: '123 Đường ABC, Quận 1, TP.HCM'
    },
    {
      id: 'DH001235',
      date: '01/11/2024',
      products: [
        { name: 'Samsung Galaxy S24 Ultra', quantity: 1, price: '27.990.000₫' },
        { name: 'Ốp lưng Samsung', quantity: 1, price: '299.000₫' }
      ],
      total: '28.289.000₫',
      payment: 'Chuyển khoản',
      status: 'shipping',
      estimatedDelivery: '02/11/2024',
      deliveryAddress: '456 Đường XYZ, Quận 3, TP.HCM'
    },
    {
      id: 'DH001236',
      date: '31/10/2024',
      products: [
        { name: 'Xiaomi 14 Pro', quantity: 1, price: '16.990.000₫' }
      ],
      total: '16.990.000₫',
      payment: 'Trả góp 0%',
      status: 'pending',
      estimatedDelivery: '02/11/2024',
      deliveryAddress: '789 Đường DEF, Quận 7, TP.HCM'
    },
    {
      id: 'DH001237',
      date: '28/10/2024',
      products: [
        { name: 'OPPO Find X7 Ultra', quantity: 1, price: '18.990.000₫' }
      ],
      total: '18.990.000₫',
      payment: 'Tiền mặt',
      status: 'cancelled',
      estimatedDelivery: '-',
      deliveryAddress: '321 Đường GHI, Quận 10, TP.HCM'
    }
  ];

  const statusConfig = {
    pending: {
      label: 'Chờ xác nhận',
      icon: <Clock className="h-5 w-5" />,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-300'
    },
    shipping: {
      label: 'Đang giao hàng',
      icon: <Truck className="h-5 w-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300'
    },
    completed: {
      label: 'Hoàn tất',
      icon: <CheckCircle className="h-5 w-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300'
    },
    cancelled: {
      label: 'Đã hủy',
      icon: <XCircle className="h-5 w-5" />,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-300'
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-gray-50 py-8 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="section-title">Đơn Hàng Của Bạn</h1>
          <p className="text-gray-600">Quản lý và theo dõi các đơn hàng của bạn</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo mã đơn hàng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="pending">Chờ xác nhận</option>
              <option value="shipping">Đang giao hàng</option>
              <option value="completed">Hoàn tất</option>
              <option value="cancelled">Đã hủy</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy đơn hàng</h3>
              <p className="text-gray-500">Thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc</p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const status = statusConfig[order.status];
              return (
                <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Order Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-600">Mã đơn hàng</p>
                        <p className="font-semibold text-lg">{order.id}</p>
                      </div>
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${status.bgColor} border ${status.borderColor}`}>
                        <span className={status.color}>{status.icon}</span>
                        <span className={`font-semibold ${status.color}`}>{status.label}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Ngày đặt</p>
                      <p className="font-semibold">{order.date}</p>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-6">
                    {/* Products */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Sản phẩm:</h3>
                      <div className="space-y-3">
                        {order.products.map((product, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center space-x-4">
                              <div className="text-4xl">📱</div>
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-600">Số lượng: {product.quantity}</p>
                              </div>
                            </div>
                            <p className="font-semibold text-primary-600">{product.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Thông tin giao hàng:</h4>
                        <p className="text-gray-600 text-sm">{order.deliveryAddress}</p>
                        <p className="text-sm text-gray-600 mt-2">
                          <span className="font-medium">Dự kiến giao:</span> {order.estimatedDelivery}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Thanh toán:</h4>
                        <p className="text-gray-600 text-sm">{order.payment}</p>
                        <p className="text-xl font-bold text-primary-600 mt-2">{order.total}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      <button className="btn-primary py-2 px-4 text-sm flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        Chi tiết
                      </button>
                      {order.status === 'pending' && (
                        <>
                          <button className="btn-secondary py-2 px-4 text-sm">
                            Điều chỉnh
                          </button>
                          <button className="bg-red-100 hover:bg-red-200 text-red-600 py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                            Hủy đơn
                          </button>
                        </>
                      )}
                      {order.status === 'completed' && (
                        <button className="bg-green-100 hover:bg-green-200 text-green-600 py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                          Mua lại
                        </button>
                      )}
                      <button className="btn-secondary py-2 px-4 text-sm">
                        Liên hệ hỗ trợ
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Info Box */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-primary-900 mb-2">Quyền lợi của bạn</h3>
          <ul className="space-y-2 text-sm text-primary-800">
            <li>• Hủy hoặc điều chỉnh đơn hàng miễn phí khi chưa được xử lý</li>
            <li>• Liên hệ bộ phận hỗ trợ 24/7 qua hotline hoặc chat trực tuyến</li>
            <li>• Đổi trả trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất</li>
            <li>• Bảo hành chính hãng theo tiêu chuẩn của từng hãng</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;

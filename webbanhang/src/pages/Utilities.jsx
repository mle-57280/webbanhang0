import React, { useState } from 'react';
import { Search, Shield, Lightbulb, BookOpen, CheckCircle, AlertCircle, Smartphone } from 'lucide-react';
import ProductCompare from '../components/ProductCompare';

const Utilities = () => {
  const [imei, setImei] = useState('');
  const [imeiResult, setImeiResult] = useState(null);
  const [selectedNeed, setSelectedNeed] = useState('');

  const handleCheckIMEI = () => {
    if (imei.length === 15) {
      // Simulate IMEI check
      setImeiResult({
        valid: true,
        brand: 'Apple',
        model: 'iPhone 15 Pro Max',
        warranty: 'Còn 340 ngày bảo hành',
        status: 'Chính hãng',
        activationDate: '25/01/2024'
      });
    } else {
      setImeiResult({
        valid: false,
        message: 'Mã IMEI không hợp lệ. Vui lòng kiểm tra lại.'
      });
    }
  };

  const productRecommendations = {
    study: {
      title: 'Dành cho học tập',
      products: [
        { name: 'iPad Air', price: '14.990.000₫', reason: 'Màn hình lớn, pin tốt cho việc học online' },
        { name: 'Samsung Galaxy Tab S9', price: '12.990.000₫', reason: 'Hỗ trợ S-Pen, phù hợp ghi chú' },
        { name: 'iPhone 14', price: '18.990.000₫', reason: 'Hệ sinh thái tốt, camera sắc nét cho học online' }
      ]
    },
    entertainment: {
      title: 'Dành cho giải trí',
      products: [
        { name: 'Samsung Galaxy S24 Ultra', price: '27.990.000₫', reason: 'Màn hình 6.8" AMOLED, loa stereo chất lượng cao' },
        { name: 'iPhone 15 Pro Max', price: '29.990.000₫', reason: 'Chip A17 Pro mạnh mẽ, chơi game mượt mà' },
        { name: 'OPPO Find X7', price: '18.990.000₫', reason: 'Pin lớn 5000mAh, xem video cả ngày' }
      ]
    },
    photography: {
      title: 'Dành cho nhiếp ảnh',
      products: [
        { name: 'iPhone 15 Pro Max', price: '29.990.000₫', reason: 'Camera 48MP, chế độ ProRAW, quay video 4K 60fps' },
        { name: 'Samsung Galaxy S24 Ultra', price: '27.990.000₫', reason: 'Camera 200MP, zoom 100x, AI nâng cao' },
        { name: 'Xiaomi 14 Pro', price: '16.990.000₫', reason: 'Camera Leica, chụp đêm xuất sắc' }
      ]
    },
    gaming: {
      title: 'Dành cho gaming',
      products: [
        { name: 'iPhone 15 Pro Max', price: '29.990.000₫', reason: 'Chip A17 Pro, GPU mạnh nhất, tản nhiệt tốt' },
        { name: 'Samsung Galaxy S24 Ultra', price: '27.990.000₫', reason: 'Snapdragon 8 Gen 3, RAM 12GB, màn hình 120Hz' },
        { name: 'ASUS ROG Phone 7', price: '19.990.000₫', reason: 'Chuyên gaming, trigger button, tản nhiệt tốt' }
      ]
    }
  };

  const guides = [
    {
      title: 'Cách bảo quản điện thoại đúng cách',
      tips: [
        'Tránh để điện thoại ở nơi có nhiệt độ quá cao hoặc quá thấp',
        'Sử dụng ốp lưng và dán màn hình để bảo vệ',
        'Không để điện thoại tiếp xúc với nước hoặc các chất lỏng',
        'Vệ sinh điện thoại định kỳ bằng khăn mềm'
      ]
    },
    {
      title: 'Mẹo sạc pin hiệu quả',
      tips: [
        'Sạc pin khi còn 20-30%, tránh để hết pin hoàn toàn',
        'Không sạc qua đêm thường xuyên',
        'Sử dụng sạc chính hãng hoặc được chứng nhận',
        'Tắt các tính năng không cần thiết khi sạc'
      ]
    },
    {
      title: 'Tối ưu hóa hiệu suất',
      tips: [
        'Cập nhật hệ điều hành và ứng dụng thường xuyên',
        'Xóa các ứng dụng không sử dụng',
        'Dọn dẹp bộ nhớ cache định kỳ',
        'Khởi động lại máy ít nhất 1 lần/tuần'
      ]
    }
  ];

  const comparisonFeatures = [
    'Màn hình',
    'Camera',
    'Chip xử lý',
    'RAM',
    'Bộ nhớ',
    'Pin',
    'Hệ điều hành',
    'Giá bán'
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="section-title">Tiện Ích</h1>
          <p className="text-gray-600">Công cụ hỗ trợ mua sắm và sử dụng điện thoại</p>
        </div>

        {/* IMEI Checker */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Kiểm Tra IMEI</h2>
              <p className="text-gray-600">Xác minh chính hãng và thời gian bảo hành</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Nhập mã IMEI (15 số)"
                value={imei}
                onChange={(e) => setImei(e.target.value.replace(/\D/g, '').slice(0, 15))}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                onClick={handleCheckIMEI}
                className="btn-primary flex items-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Kiểm tra
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Cách tìm IMEI: Gọi *#06# hoặc vào Cài đặt {'>'} Về điện thoại
            </p>

            {imeiResult && (
              <div className={`p-6 rounded-lg border-2 ${imeiResult.valid ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                {imeiResult.valid ? (
                  <>
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-800">IMEI hợp lệ - Sản phẩm chính hãng</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thương hiệu:</span>
                        <span className="font-semibold">{imeiResult.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mẫu máy:</span>
                        <span className="font-semibold">{imeiResult.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trạng thái:</span>
                        <span className="font-semibold text-green-600">{imeiResult.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ngày kích hoạt:</span>
                        <span className="font-semibold">{imeiResult.activationDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bảo hành:</span>
                        <span className="font-semibold text-primary-600">{imeiResult.warranty}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-800">Lỗi kiểm tra</h3>
                    </div>
                    <p className="text-red-700">{imeiResult.message}</p>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Product Comparison */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Search className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">So Sánh Sản Phẩm</h2>
              <p className="text-gray-600">So sánh cấu hình và giá cả giữa các sản phẩm</p>
            </div>
          </div>

          <ProductCompare />
        </section>

        {/* Product Recommendation */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Gợi Ý Sản Phẩm</h2>
              <p className="text-gray-600">Tìm sản phẩm phù hợp với nhu cầu của bạn</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bạn cần điện thoại cho mục đích gì?
            </label>
            <select
              value={selectedNeed}
              onChange={(e) => setSelectedNeed(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Chọn nhu cầu sử dụng</option>
              <option value="study">Học tập - Làm việc</option>
              <option value="entertainment">Giải trí - Xem phim</option>
              <option value="photography">Nhiếp ảnh - Quay video</option>
              <option value="gaming">Chơi game</option>
            </select>
          </div>

          {selectedNeed && (
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {productRecommendations[selectedNeed].title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {productRecommendations[selectedNeed].products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                    <div className="text-5xl text-center mb-3">📱</div>
                    <h4 className="font-semibold mb-2">{product.name}</h4>
                    <p className="text-primary-600 font-bold mb-2">{product.price}</p>
                    <p className="text-sm text-gray-600">{product.reason}</p>
                    <button className="w-full mt-3 btn-primary py-2 text-sm">
                      Xem chi tiết
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Guides */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Hướng Dẫn Sử Dụng</h2>
              <p className="text-gray-600">Mẹo và kiến thức hữu ích</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-4">{guide.title}</h3>
                <ul className="space-y-2">
                  {guide.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Utilities;

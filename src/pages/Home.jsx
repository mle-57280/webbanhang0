import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, CreditCard, Headphones, Star, TrendingUp, Gift, ShoppingCart, X, Check } from 'lucide-react';
import { products, formatPrice, calculateDiscount } from '../data/products';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { addToCart } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [imageError, setImageError] = useState({});
  
  // Lấy 4 sản phẩm nổi bật
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sản phẩm chính hãng',
      description: 'Phân phối các dòng điện thoại Apple, Samsung, Xiaomi, Oppo...'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Giao hàng nhanh',
      description: 'Hỗ trợ giao trong 2 giờ tại nội thành các thành phố lớn'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Bảo hành điện tử',
      description: 'Theo chuẩn của nhà sản xuất'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Hỗ trợ trả góp',
      description: 'Lãi suất 0% qua thẻ tín dụng hoặc công ty tài chính'
    }
  ];

  const categories = [
    { name: 'iPhone Series', image: 'image/iPhone 15 Pro Max 256GB.jpg', products: '50+ sản phẩm' },
    { name: 'Samsung Galaxy', image: 'image/Samsung Galaxy S24 Ultra 256GB.jpg', products: '80+ sản phẩm' },
    { name: 'Xiaomi Redmi & Mi', image: 'image/Xiaomi 14 Pro 256GB.jpg', products: '60+ sản phẩm' },
    { name: 'Phụ kiện', image: 'image/OPPO Reno11 Pro 256GB.png', products: '200+ sản phẩm' }
  ];

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    addToCart(product);
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={`${import.meta.env.BASE_URL}image/Head.png`} alt="MobileZone Banner" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Chào mừng đến với MobileZone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Cửa hàng trực tuyến cung cấp điện thoại chính hãng cùng các dịch vụ hỗ trợ đầy đủ. 
              Website mang đến trải nghiệm mua sắm thuận tiện, minh bạch và an toàn cho khách hàng toàn quốc.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Khám Phá Ngay
              </Link>
              <Link to="/about" className="btn-secondary bg-primary-700 hover:bg-primary-600 text-white">
                Tìm Hiểu Thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Danh Mục Sản Phẩm</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${category.image}`} 
                  alt={category.name} 
                  className="w-full h-32 object-contain mb-4"
                  onError={(e) => {
                    e.target.onerror = null;
                      e.target.src = `${import.meta.env.BASE_URL}image/iphone.jpg`;
                  }}
                />
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.products}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">Sản Phẩm Nổi Bật</h2>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
              Xem tất cả
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="card group cursor-pointer"
                onClick={() => openProductDetail(product)}
              >
                <div className="relative p-6 bg-gray-50">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{calculateDiscount(product.price, product.oldPrice)}%
                  </div>
                  <img 
                    src={`${import.meta.env.BASE_URL}${product.image}`} 
                    alt={product.name} 
                    className="w-full h-48 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${import.meta.env.BASE_URL}image/iphone.jpg`;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xl font-bold text-primary-600">{formatPrice(product.price)}</p>
                    <p className="text-sm text-gray-500 line-through">{formatPrice(product.oldPrice)}</p>
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full btn-primary py-2 text-sm flex items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="container-custom text-center">
          <Gift className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ưu Đãi Đặc Biệt Tuần Này</h2>
          <p className="text-xl mb-8 text-white/90">Giảm giá lên đến 30% cho các sản phẩm chọn lọc</p>
          <Link to="/products" className="btn-primary bg-white text-red-600 hover:bg-gray-100 inline-block">
            Mua Ngay
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Tại Sao Chọn MobileZone?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-4">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chất Lượng Đảm Bảo</h3>
              <p className="text-gray-600">
                100% sản phẩm chính hãng, có tem phụ, hóa đơn VAT đầy đủ
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Headphones className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hỗ Trợ 24/7</h3>
              <p className="text-gray-600">
                Đội ngũ tư vấn chuyên nghiệp, nhiệt tình sẵn sàng hỗ trợ mọi lúc
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bảo Hành Uy Tín</h3>
              <p className="text-gray-600">
                Bảo hành chính hãng 12 tháng, đổi mới trong 30 ngày nếu có lỗi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isDetailOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeProductDetail}>
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Chi Tiết Sản Phẩm</h2>
              <button onClick={closeProductDetail} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative bg-gray-50 rounded-lg p-8">
                    {selectedProduct.badge && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {selectedProduct.badge}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      -{calculateDiscount(selectedProduct.price, selectedProduct.oldPrice)}%
                    </div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-96 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${import.meta.env.BASE_URL}image/iphone.jpg`;
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-700">Bảo hành chính hãng</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-700">Giao hàng nhanh</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <CreditCard className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-700">Trả góp 0%</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{selectedProduct.brand}</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h1>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < selectedProduct.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-3">({selectedProduct.reviews} đánh giá)</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-4xl font-bold text-primary-600">{formatPrice(selectedProduct.price)}</span>
                      <span className="text-xl text-gray-500 line-through">{formatPrice(selectedProduct.oldPrice)}</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      Tiết kiệm: {formatPrice(selectedProduct.oldPrice - selectedProduct.price)} ({calculateDiscount(selectedProduct.price, selectedProduct.oldPrice)}%)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Thông Số Kỹ Thuật</h3>
                    <div className="space-y-3">
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Màn hình:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.screen}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Camera:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.camera}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Chip xử lý:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.chip}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">RAM:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.ram}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Bộ nhớ:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.storage}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Pin:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.battery}</span>
                      </div>
                      <div className="flex border-b pb-2">
                        <span className="text-gray-600 w-1/3">Hệ điều hành:</span>
                        <span className="font-medium flex-1">{selectedProduct.specs.os}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-green-600">
                      <Check className="h-5 w-5 mr-2" />
                      <span className="text-sm">{selectedProduct.warranty}</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Check className="h-5 w-5 mr-2" />
                      <span className="text-sm">{selectedProduct.shipping}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 mr-2" />
                      <span className="text-sm">Còn {selectedProduct.stock} sản phẩm</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={(e) => handleAddToCart(selectedProduct, e)}
                      disabled={selectedProduct.stock === 0}
                      className="flex-1 btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {selectedProduct.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

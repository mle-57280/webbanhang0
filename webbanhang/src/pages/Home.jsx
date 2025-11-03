import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, CreditCard, Headphones, Star, TrendingUp, Gift, ShoppingCart } from 'lucide-react';
import { products, formatPrice, calculateDiscount } from '../data/products';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { addToCart } = useApp();
  
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
    { name: 'iPhone Series', image: '📱', products: '50+ sản phẩm' },
    { name: 'Samsung Galaxy', image: '📱', products: '80+ sản phẩm' },
    { name: 'Xiaomi Redmi & Mi', image: '📱', products: '60+ sản phẩm' },
    { name: 'Phụ kiện', image: '🎧', products: '200+ sản phẩm' }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
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
                <div className="text-6xl mb-4">{category.image}</div>
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
              <div key={product.id} className="card group">
                <div className="relative p-6 bg-gray-50">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{calculateDiscount(product.price, product.oldPrice)}%
                  </div>
                  <div className="text-8xl text-center">{product.image}</div>
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
                    onClick={() => handleAddToCart(product)}
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
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Newspaper, TrendingUp, BookOpen, Tag, Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Tất cả', icon: <Newspaper className="h-4 w-4" /> },
    { value: 'review', label: 'Đánh giá sản phẩm', icon: <TrendingUp className="h-4 w-4" /> },
    { value: 'news', label: 'Tin công nghệ', icon: <Newspaper className="h-4 w-4" /> },
    { value: 'guide', label: 'Hướng dẫn', icon: <BookOpen className="h-4 w-4" /> },
    { value: 'promotion', label: 'Khuyến mãi', icon: <Tag className="h-4 w-4" /> }
  ];

  const articles = [
    {
      id: 1,
      title: 'Đánh giá chi tiết iPhone 15 Pro Max: Chiếc iPhone đáng mua nhất năm 2024',
      excerpt: 'iPhone 15 Pro Max mang đến nhiều cải tiến đáng giá với chip A17 Pro, camera 48MP và thiết kế titanium cao cấp...',
      category: 'review',
      image: '📱',
      date: '02/11/2024',
      author: 'Nguyễn Văn A',
      readTime: '8 phút đọc',
      views: 1234
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max: Cuộc chiến flagship 2024',
      excerpt: 'So sánh chi tiết hai siêu phẩm hàng đầu từ Samsung và Apple về thiết kế, hiệu năng, camera và giá cả...',
      category: 'review',
      image: '📱',
      date: '01/11/2024',
      author: 'Trần Thị B',
      readTime: '10 phút đọc',
      views: 2156
    },
    {
      id: 3,
      title: 'Top 5 điện thoại chụp ảnh đẹp nhất hiện nay',
      excerpt: 'Khám phá những chiếc điện thoại có camera xuất sắc nhất trên thị trường, phù hợp cho các nhiếp ảnh gia di động...',
      category: 'review',
      image: '📱',
      date: '31/10/2024',
      author: 'Lê Văn C',
      readTime: '6 phút đọc',
      views: 987
    },
    {
      id: 4,
      title: 'Xiaomi 14 Pro: Giá tốt nhưng vẫn đầy sức mạnh',
      excerpt: 'Xiaomi 14 Pro mang đến hiệu năng mạnh mẽ với Snapdragon 8 Gen 3 và camera Leica với mức giá cạnh tranh...',
      category: 'review',
      image: '📱',
      date: '30/10/2024',
      author: 'Phạm Thị D',
      readTime: '7 phút đọc',
      views: 1543
    },
    {
      id: 5,
      title: 'Xu hướng công nghệ smartphone năm 2024: AI và camera là tâm điểm',
      excerpt: 'Các hãng điện thoại đang tập trung phát triển AI tích hợp và nâng cấp hệ thống camera để cạnh tranh...',
      category: 'news',
      image: '📱',
      date: '29/10/2024',
      author: 'Hoàng Văn E',
      readTime: '5 phút đọc',
      views: 876
    },
    {
      id: 6,
      title: 'Hướng dẫn chọn điện thoại phù hợp với nhu cầu sử dụng',
      excerpt: 'Tìm hiểu cách chọn điện thoại dựa trên mục đích sử dụng: công việc, giải trí, gaming hay nhiếp ảnh...',
      category: 'guide',
      image: '📱',
      date: '28/10/2024',
      author: 'Nguyễn Thị F',
      readTime: '9 phút đọc',
      views: 2341
    },
    {
      id: 7,
      title: '10 mẹo sử dụng iPhone hiệu quả hơn mà ít người biết',
      excerpt: 'Khám phá những tính năng ẩn và mẹo hữu ích giúp bạn khai thác tối đa khả năng của iPhone...',
      category: 'guide',
      image: '📱',
      date: '27/10/2024',
      author: 'Trần Văn G',
      readTime: '8 phút đọc',
      views: 3210
    },
    {
      id: 8,
      title: 'Chương trình giảm giá lớn nhất năm: Black Friday 2024',
      excerpt: 'Chuẩn bị cho ngày mua sắm lớn nhất năm với các ưu đãi giảm giá lên đến 50% cho điện thoại và phụ kiện...',
      category: 'promotion',
      image: '🎁',
      date: '26/10/2024',
      author: 'MobileZone',
      readTime: '3 phút đọc',
      views: 5432
    },
    {
      id: 9,
      title: 'Cách bảo vệ pin điện thoại để sử dụng lâu dài',
      excerpt: 'Những thói quen sạc pin đúng cách và mẹo bảo quản giúp kéo dài tuổi thọ pin điện thoại của bạn...',
      category: 'guide',
      image: '🔋',
      date: '25/10/2024',
      author: 'Lê Thị H',
      readTime: '6 phút đọc',
      views: 1876
    }
  ];

  const featuredArticle = articles[0];
  const filteredArticles = selectedCategory === 'all' 
    ? articles.slice(1) 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="section-title">Tin Tức & Sự Kiện</h1>
          <p className="text-gray-600">Cập nhật thông tin công nghệ và ưu đãi mới nhất</p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-12 flex items-center justify-center">
              <div className="text-9xl">{featuredArticle.image}</div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-4 w-fit">
                Nổi bật
              </div>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary-600 transition-colors cursor-pointer">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredArticle.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {featuredArticle.author}
                </div>
              </div>
              <button className="btn-primary w-fit flex items-center">
                Đọc thêm
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 flex items-center justify-center">
                <div className="text-7xl">{article.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase">
                    {categories.find(c => c.value === article.category)?.label}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Xem Thêm Bài Viết
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 md:p-12 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng Ký Nhận Tin</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Nhận thông báo về sản phẩm mới, khuyến mãi đặc biệt và tin tức công nghệ mới nhất
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

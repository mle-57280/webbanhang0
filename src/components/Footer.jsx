import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">MobileZone</span>
            </div>
            <p className="text-sm mb-4">
              Cửa hàng trực tuyến cung cấp điện thoại chính hãng cùng các dịch vụ hỗ trợ đầy đủ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors text-sm">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors text-sm">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition-colors text-sm">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary-400 transition-colors text-sm">
                  Tin Tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ Trợ Khách Hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/utilities" className="hover:text-primary-400 transition-colors text-sm">
                  Kiểm Tra IMEI
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-primary-400 transition-colors text-sm">
                  Tra Cứu Đơn Hàng
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors text-sm">
                  Chính Sách Bảo Hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors text-sm">
                  Chính Sách Đổi Trả
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>1900 xxxx</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>support@mobilezone.vn</span>
              </li>
            </ul>
            <p className="text-sm mt-3">
              Thời gian hỗ trợ: 8:00 - 21:00 mỗi ngày
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 MobileZone. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

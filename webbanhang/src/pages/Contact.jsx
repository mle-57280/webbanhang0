import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Địa chỉ',
      content: '123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Hotline',
      content: '1900 xxxx (Miễn phí)',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'support@mobilezone.vn',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Thời gian làm việc',
      content: '8:00 - 21:00 mỗi ngày',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const stores = [
    {
      name: 'MobileZone - Chi nhánh Quận 1',
      address: '123 Đường Nguyễn Huệ, Quận 1, TP.HCM',
      phone: '028 xxxx xxxx',
      hours: '8:00 - 21:00'
    },
    {
      name: 'MobileZone - Chi nhánh Quận 3',
      address: '456 Đường Võ Văn Tần, Quận 3, TP.HCM',
      phone: '028 yyyy yyyy',
      hours: '8:00 - 21:00'
    },
    {
      name: 'MobileZone - Chi nhánh Thủ Đức',
      address: '789 Đường Võ Văn Ngân, TP. Thủ Đức, TP.HCM',
      phone: '028 zzzz zzzz',
      hours: '8:00 - 21:00'
    }
  ];

  const faqs = [
    {
      question: 'Thời gian giao hàng là bao lâu?',
      answer: 'Đơn hàng trong nội thành TP.HCM được giao trong vòng 2 giờ. Các tỉnh thành khác từ 2-5 ngày.'
    },
    {
      question: 'Chính sách đổi trả như thế nào?',
      answer: 'Đổi trả trong 7 ngày nếu sản phẩm lỗi từ nhà sản xuất. Sản phẩm phải còn nguyên seal, chưa kích hoạt.'
    },
    {
      question: 'Làm sao để kiểm tra bảo hành?',
      answer: 'Sử dụng công cụ kiểm tra IMEI trên trang Tiện Ích hoặc liên hệ hotline để được hỗ trợ.'
    },
    {
      question: 'Có hỗ trợ trả góp không?',
      answer: 'Có, chúng tôi hỗ trợ trả góp 0% qua thẻ tín dụng và các công ty tài chính liên kết.'
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="section-title">Liên Hệ</h1>
          <p className="text-gray-600">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center w-14 h-14 ${info.bgColor} ${info.color} rounded-full mb-4`}>
                {info.icon}
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-bold">Gửi Tin Nhắn</h2>
            </div>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Gửi thành công!</h3>
                <p className="text-green-700">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0xxx xxx xxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chủ đề <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="product">Tư vấn sản phẩm</option>
                    <option value="order">Đơn hàng</option>
                    <option value="warranty">Bảo hành</option>
                    <option value="complaint">Khiếu nại</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Nhập nội dung yêu cầu của bạn..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Gửi Yêu Cầu
                </button>
              </form>
            )}
          </div>

          {/* Store Locations & FAQ */}
          <div className="space-y-8">
            {/* Store Locations */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Hệ Thống Cửa Hàng</h2>
              <div className="space-y-4">
                {stores.map((store, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4 py-2">
                    <h3 className="font-semibold text-lg mb-2">{store.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        {store.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        {store.phone}
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        {store.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Kết Nối Với Chúng Tôi</h2>
              <div className="flex space-x-4">
                <a href="#" className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
                <a href="#" className="flex-1 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
                <a href="#" className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors">
                  <Youtube className="h-5 w-5 mr-2" />
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-primary-600">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Bản Đồ</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Bản đồ Google Maps</p>
              <p className="text-sm text-gray-400">123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

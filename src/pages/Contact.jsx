import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Facebook, Instagram, Youtube, ChevronDown, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Vui lòng nhập tiêu đề';
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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

            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-green-800">Gửi thành công!</p>
                  <p className="text-sm text-green-700">Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0123456789"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiêu đề *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Vấn đề cần hỗ trợ"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Nhập nội dung cần hỗ trợ..."
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary py-3 px-8 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
              </button>
            </form>
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
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}image/Map.png`} alt="Bản đồ MobileZone" className="w-full h-full object-cover" />
          </div>
          <p className="text-center mt-4 text-gray-600">
            <MapPin className="h-4 w-4 inline mr-2" />
            123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

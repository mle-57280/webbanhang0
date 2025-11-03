import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const About = () => {
  const commitments = [
    'Chỉ bán sản phẩm xuất xứ minh bạch',
    'Cung cấp thông tin chính xác, hướng dẫn đầy đủ khi mua hàng',
    'Chính sách đổi trả linh hoạt theo tiêu chuẩn thương mại điện tử',
    'Đảm bảo quyền lợi khách hàng được bảo vệ tối đa',
    'Giá cả minh bạch, không phát sinh chi phí ẩn',
    'Hỗ trợ tư vấn nhiệt tình trước và sau bán hàng'
  ];

  const stats = [
    { number: '50,000+', label: 'Khách hàng tin tưởng' },
    { number: '100+', label: 'Sản phẩm đa dạng' },
    { number: '99%', label: 'Đánh giá tích cực' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về MobileZone</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-100">
            Đối tác tin cậy trong hành trình công nghệ của bạn
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Giới Thiệu Đơn Vị</h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-primary-600">MobileZone</span> được thành lập với 
                mục tiêu mang đến cho khách hàng Việt Nam một kênh mua sắm điện thoại trực tuyến uy tín. 
                Mọi sản phẩm phân phối đều là hàng chính hãng, có hóa đơn và bảo hành rõ ràng.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chúng tôi hiểu rằng điện thoại thông minh không chỉ là thiết bị công nghệ mà còn là người 
                bạn đồng hành trong cuộc sống hàng ngày. Vì vậy, MobileZone cam kết mang đến những sản phẩm 
                chất lượng cao nhất với dịch vụ khách hàng tận tâm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Cam Kết Hoạt Động</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Tầm Nhìn</h3>
              <p className="text-gray-600">
                Phát triển MobileZone trở thành thương hiệu công nghệ trực tuyến có quy mô lớn, 
                đa dạng thiết bị và dịch vụ, mở rộng phạm vi trên toàn quốc.
              </p>
            </div>

            {/* Mission */}
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sứ Mệnh</h3>
              <p className="text-gray-600">
                Cung cấp các sản phẩm công nghệ chất lượng cao với giá cả hợp lý, 
                giúp mọi người dễ dàng tiếp cận và sử dụng công nghệ tiên tiến.
              </p>
            </div>

            {/* Values */}
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Giá Trị Cốt Lõi</h3>
              <p className="text-gray-600">
                Uy tín - Chất lượng - Tận tâm. Chúng tôi đặt lợi ích khách hàng lên hàng đầu 
                và không ngừng cải thiện dịch vụ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="section-title">Đội Ngũ Chuyên Nghiệp</h2>
            <p className="text-lg text-gray-600 mb-8">
              Với đội ngũ nhân viên trẻ trung, nhiệt huyết và am hiểu sâu về công nghệ, 
              chúng tôi luôn sẵn sàng tư vấn và hỗ trợ khách hàng chọn được sản phẩm phù hợp nhất.
            </p>
            <div className="bg-primary-50 rounded-xl p-8">
              <p className="text-gray-700 italic">
                "Sự hài lòng của khách hàng chính là động lực để chúng tôi không ngừng phát triển và hoàn thiện. 
                MobileZone cam kết mang đến trải nghiệm mua sắm tốt nhất cho mọi khách hàng."
              </p>
              <p className="mt-4 font-semibold text-primary-600">- Ban Lãnh Đạo MobileZone</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

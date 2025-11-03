import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Đánh giá chi tiết iPhone 15 Pro Max: Chiếc iPhone đáng mua nhất năm 2024',
    content: `
iPhone 15 Pro Max mang đến nhiều cải tiến đáng giá, trở thành chiếc flagship toàn diện nhất của Apple trong năm 2024.

Thiết kế và vật liệu Lần đầu tiên Apple sử dụng khung titanium, giúp máy nhẹ hơn nhưng vẫn cứng cáp. Cảm giác cầm nắm sang trọng và chắc chắn.

Màn hình: Tấm nền OLED Super Retina XDR kích thước 6.7 inch, hỗ trợ ProMotion 120Hz, HDR10 và độ sáng tối đa lên đến 2000 nits – mang lại trải nghiệm hiển thị rực rỡ ở mọi điều kiện ánh sáng.

Hiệu năng: Chip A17 Pro với tiến trình 3nm giúp tăng hiệu năng CPU 10% và GPU 20%, hỗ trợ ray-tracing phần cứng – cực kỳ mạnh cho game mobile.

Camera: Cảm biến chính 48MP, khả năng zoom quang học 5x, chụp ảnh chi tiết tuyệt vời cả ngày lẫn đêm.

Kết luận: iPhone 15 Pro Max là lựa chọn hàng đầu cho người dùng yêu cầu hiệu năng, camera và thiết kế cao cấp.`,
    image: 'image/iPhone 15 Pro Max 256GB.jpg',
    date: '02/11/2024',
    author: 'Nguyễn Văn A'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max: Cuộc chiến flagship 2024',
    content: `
Hai siêu phẩm đầu bảng năm 2024 là Galaxy S24 Ultra và iPhone 15 Pro Max – mỗi máy đều có những ưu thế riêng biệt.

Thiết kế: Galaxy S24 Ultra vẫn giữ khung vuông vức, chất liệu Titanium mới, trong khi iPhone 15 Pro Max nhỏ gọn hơn và có khung bo tròn mềm mại.

Hiệu năng: Snapdragon 8 Gen 3 for Galaxy mang lại sức mạnh vượt trội trên Android, còn A17 Pro vẫn là “ông vua” hiệu năng ở iOS.

Camera: S24 Ultra dẫn đầu với cảm biến 200MP và zoom 10x, nhưng iPhone 15 Pro Max có tông màu ảnh tự nhiên hơn và quay video xuất sắc.

Phần mềm: Android 14 vs iOS 17 – mỗi hệ sinh thái có thế mạnh riêng, tùy sở thích người dùng.

Kết luận: iPhone 15 Pro Max phù hợp người dùng yêu sự ổn định, trong khi Galaxy S24 Ultra là “cỗ máy sáng tạo” với camera mạnh và bút S-Pen.`,
    image: 'image/Samsung Galaxy S24 Ultra 256GB.jpg',
    date: '01/11/2024',
    author: 'Trần Thị B'
  },
  {
    id: 3,
    title: 'Top 5 điện thoại chụp ảnh đẹp nhất hiện nay',
    content: `
Nếu bạn là người yêu thích nhiếp ảnh di động, dưới đây là 5 lựa chọn đáng chú ý nhất năm 2024:

1. iPhone 15 Pro Max – Màu sắc trung thực, quay video chuyên nghiệp.
2. Samsung Galaxy S24 Ultra – Zoom 10x cực kỳ ấn tượng.
3. Xiaomi 14 Ultra – Camera Leica mang lại độ chi tiết tuyệt vời.
4. Google Pixel 8 Pro – AI xử lý ảnh cực kỳ thông minh.
5. Oppo Find X7 Ultra – Chân dung và ánh sáng tự nhiên, dễ dùng.

Tùy nhu cầu, bạn có thể chọn giữa độ chân thực, khả năng zoom, hay sự tiện lợi của AI.`,
    image: 'image/Xiaomi 14 Pro 256GB.jpg',
    date: '31/10/2024',
    author: 'Lê Văn C'
  },
  {
    id: 4,
    title: 'Xiaomi 14 Pro: Giá tốt nhưng vẫn đầy sức mạnh',
    content: `
Xiaomi 14 Pro là minh chứng rằng smartphone cao cấp không cần phải quá đắt.

Hiệu năng: Trang bị Snapdragon 8 Gen 3, RAM LPDDR5X và bộ nhớ UFS 4.0, Xiaomi 14 Pro có thể “cân” mọi tác vụ nặng, kể cả game 3D.

Camera: Hợp tác cùng Leica, cho ra ảnh sắc nét và màu chân thực. Ống kính chính 50MP, cảm biến lớn, chụp đêm tốt.

Màn hình: AMOLED 6.7 inch độ sáng 3000 nits, 120Hz, hiển thị rực rỡ và siêu mượt.

Kết luận: Ở mức giá tầm trung cao, Xiaomi 14 Pro là “flagship killer” xứng đáng năm 2024.`,
    image: 'image/Xiaomi 14 Pro 256GB.jpg',
    date: '30/10/2024',
    author: 'Phạm Thị D'
  },
  {
    id: 5,
    title: 'Xu hướng công nghệ smartphone năm 2024: AI và camera là tâm điểm',
    content: `
Năm 2024 đánh dấu bước ngoặt lớn của smartphone khi trí tuệ nhân tạo (AI) được tích hợp sâu hơn bao giờ hết.

- AI cá nhân hóa: Điện thoại có thể tự động sắp xếp ứng dụng, gợi ý phản hồi tin nhắn và nhận diện thói quen người dùng.
- Camera AI: Giúp xử lý ảnh nhanh và đẹp hơn, nhận diện cảnh vật thông minh.
- Tối ưu pin: AI theo dõi mức tiêu thụ và điều chỉnh hiệu năng.
- Bảo mật: Nhận diện khuôn mặt, giọng nói và hành vi sử dụng ngày càng chính xác.

AI và camera đang trở thành “cặp bài trùng” dẫn dắt xu hướng smartphone tương lai.`,
    image: 'image/OPPO Find X7 Ultra 256GB.jpg',
    date: '29/10/2024',
    author: 'Hoàng Văn E'
  },
  {
    id: 6,
    title: 'Hướng dẫn chọn điện thoại phù hợp với nhu cầu sử dụng',
    content: `
Chọn điện thoại phù hợp không chỉ dựa vào giá, mà còn phụ thuộc mục đích sử dụng:

- Làm việc & học tập: Ưu tiên pin trâu, màn hình lớn – ví dụ Galaxy A54, iPhone 13.
- Chơi game: Nên chọn chip mạnh như Snapdragon 8 Gen 2, tản nhiệt tốt (Red Magic, ROG Phone).
- Chụp ảnh: iPhone, Pixel, Xiaomi 14 Pro là lựa chọn sáng giá.
- Giải trí & xem phim: Màn hình OLED, âm thanh stereo, pin lớn trên 5000mAh.

Luôn đặt nhu cầu cá nhân lên đầu để chọn máy phù hợp nhất.`,
    image: 'image/Samsung Galaxy A54 5G 128GB.jpg',
    date: '28/10/2024',
    author: 'Nguyễn Thị F'
  },
  {
    id: 7,
    title: '10 mẹo sử dụng iPhone hiệu quả hơn mà ít người biết',
    content: `
Dưới đây là 10 mẹo giúp bạn tận dụng tối đa iPhone:

1. Dùng Back Tap để chụp màn hình nhanh.
2. Ẩn ảnh riêng tư trong thư viện.
3. Dùng Focus Mode để tập trung học tập, làm việc.
4. Tạo widget tùy chỉnh trên màn hình chính.
5. Sử dụng Shortcuts để tự động hóa công việc.
6. Bật Haptic Keyboard cho phản hồi khi gõ.
7. Kiểm tra pin từng app trong Battery Settings.
8. Dùng Live Text để sao chép chữ từ ảnh.
9. FaceTime Links – gọi cho người dùng Android.
10. Find My – theo dõi AirTag, thiết bị Apple.

Áp dụng những mẹo này giúp iPhone của bạn tiện lợi và thông minh hơn nhiều.`,
    image: 'image/iPhone 13 128GB.jpg',
    date: '27/10/2024',
    author: 'Trần Văn G'
  },
  {
    id: 8,
    title: 'Chương trình giảm giá lớn nhất năm: Black Friday 2024',
    content: `
Black Friday 2024 sẽ là cơ hội vàng cho người yêu công nghệ!

Thời gian: Từ 25/11 đến 30/11/2024.

Ưu đãi nổi bật:
- Giảm đến 50% cho điện thoại flagship.
- Tặng kèm phụ kiện chính hãng.
- Ưu tiên khách hàng thành viên MobileZone.

Đừng bỏ lỡ cơ hội săn deal cực hot – số lượng có hạn, áp dụng tại cửa hàng và online.`,
    image: 'image/Head.png',
    date: '26/10/2024',
    author: 'MobileZone'
  },
  {
    id: 9,
    title: 'Cách bảo vệ pin điện thoại để sử dụng lâu dài',
    content: `
Pin là “trái tim” của điện thoại, và chăm sóc đúng cách sẽ giúp kéo dài tuổi thọ đáng kể.

1. Không sạc đầy 100% thường xuyên: Giữ mức pin trong khoảng 20–80% giúp ổn định tế bào pin.
2. Tránh dùng điện thoại khi đang sạc: Làm tăng nhiệt, giảm tuổi thọ pin.
3. Sử dụng sạc chính hãng: Tránh sạc nhanh không tương thích.
4. Bật chế độ tiết kiệm năng lượng khi cần.
5. Giữ máy mát: Nhiệt độ cao làm giảm dung lượng pin nhanh chóng.

Thực hiện các mẹo này sẽ giúp pin của bạn bền hơn rất nhiều.`,
    image: 'image/Realme 11 Pro+ 256GB.jpg',
    date: '25/10/2024',
    author: 'Lê Thị H'
  }
];

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div className="p-12 text-center text-gray-600">Không tìm thấy bài viết.</div>;
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container-custom max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-600 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Quay lại
        </button>

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{article.date}</div>
          <div className="flex items-center"><User className="h-4 w-4 mr-1" />{article.author}</div>
        </div>

        <img src={`${import.meta.env.BASE_URL}${article.image}`} alt={article.title} className="w-full rounded-lg mb-6" />
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

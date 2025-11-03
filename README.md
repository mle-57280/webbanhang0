# MobileZone - Website Bán Điện Thoại

Website thương mại điện tử chuyên bán điện thoại chính hãng với giao diện hiện đại và đầy đủ tính năng.

## 🚀 Tính Năng

### 7 Trang Chính

1. **Trang Chủ (Home)** - Giới thiệu tổng quan, sản phẩm nổi bật, ưu đãi
2. **Giới Thiệu (About)** - Thông tin công ty, tầm nhìn, sứ mệnh
3. **Sản Phẩm (Products)** - Danh sách sản phẩm với bộ lọc thông minh
4. **Đơn Hàng (Orders)** - Quản lý và theo dõi đơn hàng
5. **Tin Tức (News)** - Tin công nghệ, đánh giá, khuyến mãi
6. **Tiện Ích (Utilities)** - Kiểm tra IMEI, so sánh, gợi ý sản phẩm
7. **Liên Hệ (Contact)** - Form liên hệ, thông tin cửa hàng

### Tính Năng Nổi Bật

✅ Giao diện đẹp, hiện đại với TailwindCSS
✅ Responsive 100% trên mọi thiết bị
✅ Navigation mượt mà với React Router
✅ Icons chuyên nghiệp từ Lucide React
✅ Bộ lọc sản phẩm thông minh
✅ Kiểm tra IMEI trực tuyến
✅ Gợi ý sản phẩm theo nhu cầu
✅ Quản lý đơn hàng chi tiết
✅ Form liên hệ với validation

## 📦 Công Nghệ Sử Dụng

- **React 18** - Thư viện UI
- **Vite** - Build tool nhanh chóng
- **React Router DOM** - Routing
- **TailwindCSS** - CSS framework
- **Lucide React** - Icon library

## 🛠️ Cài Đặt

### Yêu Cầu
- Node.js 16+ và npm/yarn

### Các Bước Cài Đặt

1. **Cài đặt dependencies**
```bash
npm install
```

2. **Chạy development server**
```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:3000`

3. **Build cho production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 📁 Cấu Trúc Thư Mục

```
webbanhang/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header với navigation
│   │   └── Footer.jsx          # Footer với thông tin liên hệ
│   ├── pages/
│   │   ├── Home.jsx            # Trang chủ
│   │   ├── About.jsx           # Giới thiệu
│   │   ├── Products.jsx        # Sản phẩm
│   │   ├── Orders.jsx          # Đơn hàng
│   │   ├── News.jsx            # Tin tức
│   │   ├── Utilities.jsx       # Tiện ích
│   │   └── Contact.jsx         # Liên hệ
│   ├── App.jsx                 # Component chính
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                  # HTML template
├── package.json               # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # TailwindCSS config
└── README.md                  # Documentation
```

## 🎨 Tùy Chỉnh

### Màu Sắc
Chỉnh sửa màu chủ đạo trong `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#0ea5e9', // Màu chính
    600: '#0284c7',
    // ...
  }
}
```

### Thông Tin Liên Hệ
Cập nhật thông tin trong `src/components/Footer.jsx` và `src/pages/Contact.jsx`

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## 📝 Notes

- Các CSS warnings về `@tailwind` và `@apply` là bình thường khi sử dụng TailwindCSS
- IMEI checker là demo, cần tích hợp API thực tế
- Form liên hệ cần backend để xử lý
- Cần thêm authentication cho quản lý đơn hàng

## 🚀 Triển Khai

### GitHub Pages

Website đã được cấu hình sẵn để deploy lên GitHub Pages!

**Link website:** https://chucuncon0107-glitch.github.io/web_banhang/

**Cách deploy:**
1. Push code lên GitHub (GitHub Actions sẽ tự động deploy)
2. Hoặc chạy: `npm run deploy`

Xem chi tiết trong file `HUONG_DAN_DEPLOY.md`

### Các Platform Khác

Website cũng có thể deploy lên:
- Vercel
- Netlify  
- Firebase Hosting

## 📞 Hỗ Trợ

Nếu gặp vấn đề, vui lòng tạo issue hoặc liên hệ.

## 📄 License

MIT License

---

**Phát triển bởi MobileZone Team** 🚀

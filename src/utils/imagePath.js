// Helper function để lấy đường dẫn ảnh đúng với base path
export const getImagePath = (imagePath) => {
  // Nếu đường dẫn đã có base path thì giữ nguyên
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Lấy base URL từ Vite env (sẽ là '/web_banhang/' trong production)
  const base = import.meta.env.BASE_URL || '/';
  
  // Loại bỏ dấu / đầu tiên nếu có
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Đảm bảo base có dấu / ở cuối và cleanPath không có dấu / ở đầu
  const baseClean = base.endsWith('/') ? base : `${base}/`;
  const pathClean = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  
  // Kết hợp base path với đường dẫn ảnh
  return `${baseClean}${pathClean}`;
};


# Official Link Page (Link-in-Bio)

Trang hồ sơ liên kết cá nhân tối giản, tốc độ cao, hỗ trợ **Dark / Light Mode**, nút **Copy nhanh + Toast**, và tối ưu chuẩn SEO / Open Graph khi chia sẻ lên Facebook, Zalo, Telegram.

## Cách cập nhật thông tin & liên kết nhanh

1. Mở file **`config.js`** trực tiếp trên GitHub (bấm biểu tượng cây bút chì **Edit this file**).
2. Chỉnh sửa:
   - `profile`: Tên, chức danh, bio, link ảnh đại diện (hoặc upload ảnh `avatar.jpg` lên repo và điền `"./avatar.jpg"`).
   - `socials`: Thêm hoặc bớt các mạng xã hội.
   - `links`: Thêm/sửa/xóa các nút liên kết hoặc nút Copy nhanh (Email, SĐT, Số tài khoản).
3. Nhấn **Commit changes** để lưu. Trang web sẽ tự động cập nhật sau khoảng 30–60 giây.

## Lưu ý khi chia sẻ lên Facebook / Zalo
Để thẻ xem trước (Preview Card) hiển thị đúng tên, mô tả và ảnh của bạn khi dán link lên mạng xã hội, hãy cập nhật các thẻ `<meta property="og:...">` trong file **`index.html`**.

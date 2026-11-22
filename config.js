/**
 * ============================================================================
 * FILE CẤU HÌNH TRANG LINK CÁ NHÂN (OFFICIAL LINK PAGE)
 * Bạn chỉ cần chỉnh sửa nội dung trong file này rồi lưu lại trên GitHub,
 * website sẽ tự động cập nhật sau vài chục giây.
 * ============================================================================
 */

window.LINK_PAGE_CONFIG = {
  // 1. Cài đặt giao diện & Màu sắc chủ đạo
  theme: {
    // Chế độ mặc định nếu người dùng chưa từng chọn: "dark" | "light" | "system"
    defaultMode: "dark",
    // Màu nhấn (Accent): Bạn có thể đổi cặp màu Hex tùy thích
    // Gợi ý:
    // - Xanh tím hiện đại: primary "#6366f1", secondary "#06b6d4"
    // - Tối giản sang trọng: primary "#3b82f6", secondary "#8b5cf6"
    // - Tone ấm nhẹ nhàng: primary "#f97316", secondary "#ec4899"
    accentPrimary: "#6366f1",
    accentSecondary: "#06b6d4"
  },

  // 2. Thông tin cá nhân (Phần Header)
  profile: {
    name: "Nguyễn Minh Anh",
    verified: true, // true = hiện dấu tích xanh, false = ẩn
    tagline: "Software Engineer • UI/UX & Content Creator",
    bio: "Chia sẻ kiến thức lập trình Web, thiết kế giao diện tối giản và những công cụ giúp làm việc hiệu quả hơn mỗi ngày.",
    // Bạn có thể upload file avatar.jpg lên cùng thư mục trên GitHub và điền "./avatar.jpg"
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    showOnlineDot: true // Chấm xanh trạng thái ở góc avatar
  },

  // 3. Thanh Icon Mạng xã hội (Social Bar)
  // Các platform được hỗ trợ sẵn icon sắc nét:
  // "facebook", "instagram", "tiktok", "youtube", "x", "linkedin", "github", "zalo", "telegram", "threads", "website"
  socials: [
    {
      platform: "facebook",
      url: "https://facebook.com/username",
      label: "Facebook"
    },
    {
      platform: "instagram",
      url: "https://instagram.com/username",
      label: "Instagram"
    },
    {
      platform: "tiktok",
      url: "https://tiktok.com/@username",
      label: "TikTok"
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@username",
      label: "YouTube"
    },
    {
      platform: "github",
      url: "https://github.com/username",
      label: "GitHub"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/username",
      label: "LinkedIn"
    },
    {
      platform: "zalo",
      url: "https://zalo.me/0901234567",
      label: "Zalo"
    }
  ],

  // 4. Danh sách Liên kết chính (Main Links)
  // - icon: Tên icon của Lucide Icons (https://lucide.dev/icons), ví dụ:
  //   "globe", "code-2", "sparkles", "book-open", "shopping-bag", "video", "mail", "phone", "landmark", "file-text"
  // - badge: Nhãn nhỏ cạnh tiêu đề (để "" nếu không cần)
  // - badgeType: "official" | "hot" | "new"
  // - type: "link" (mở trang web) hoặc "copy" (sao chép nhanh và hiện thông báo Toast)
  links: [
    {
      title: "Website & Portfolio Cá Nhân",
      subtitle: "Xem các dự án thiết kế & lập trình mới nhất của mình",
      url: "https://tenban.com",
      icon: "globe",
      badge: "Official",
      badgeType: "official",
      type: "link"
    },
    {
      title: "Bộ Tài Liệu Tự Học Frontend 2025",
      subtitle: "Tổng hợp roadmap, tài nguyên miễn phí & source code mẫu",
      url: "https://github.com/username",
      icon: "sparkles",
      badge: "Mới",
      badgeType: "new",
      type: "link"
    },
    {
      title: "Kênh YouTube Chia Sẻ Kinh Nghiệm",
      subtitle: "Video review góc làm việc, tech stack & productivity",
      url: "https://youtube.com/@username",
      icon: "play-circle",
      badge: "Hot",
      badgeType: "hot",
      type: "link"
    },
    {
      title: "Đặt Lịch Tư Vấn / Booking Công Việc",
      subtitle: "Trao đổi trực tiếp về dự án Website hoặc hợp tác truyền thông",
      url: "https://cal.com/username",
      icon: "calendar",
      badge: "",
      badgeType: "",
      type: "link"
    },
    {
      title: "Sao chép Email Liên Hệ",
      subtitle: "contact@tenban.com — Bấm để sao chép nhanh",
      icon: "mail",
      badge: "",
      badgeType: "",
      type: "copy",
      copyValue: "contact@tenban.com",
      copySuccessText: "Đã sao chép email liên hệ!"
    },
    {
      title: "Ủng Hộ Cà Phê (MB Bank)",
      subtitle: "STK: 0901234567 — Nguyễn Minh Anh (Bấm để copy)",
      icon: "coffee",
      badge: "",
      badgeType: "",
      type: "copy",
      copyValue: "0901234567",
      copySuccessText: "Đã sao chép số tài khoản!"
    }
  ],

  // 5. Chân trang (Footer)
  footer: {
    text: "© 2025 Nguyễn Minh Anh • Built with ♥ for fast web"
  }
};
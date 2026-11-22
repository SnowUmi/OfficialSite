(function () {
  "use strict";

  const config = window.LINK_PAGE_CONFIG;
  if (!config) {
    console.error("Không tìm thấy cấu hình window.LINK_PAGE_CONFIG trong config.js");
    return;
  }

  // Bộ SVG chuẩn cho các mạng xã hội (bao gồm cả Zalo, TikTok, Threads...)
  const SOCIAL_SVGS = {
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.76 1.52V6.76a4.84 4.84 0 0 1-1-.07z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
    threads: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.182c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>`,
    zalo: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.75 1.38 5.21 3.56 6.86L4.6 21.6a.6.6 0 0 0 .82.7l3.9-1.66A10.9 10.9 0 0 0 12 20c5.52 0 10-4.03 10-9S17.52 2 12 2zm-3.2 11.4H6.15c-.4 0-.65-.43-.43-.77l2.22-3.43H6.25a.5.5 0 0 1 0-1h2.65c.4 0 .65.43.43.77L7.11 12.4H8.8a.5.5 0 0 1 0 1zm4.6 0a.5.5 0 0 1-.5-.5v-.3a1.7 1.7 0 0 1-1.2.45c-.96 0-1.7-.78-1.7-1.78 0-1 .74-1.77 1.7-1.77.5 0 .93.2 1.2.45v-.05a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5zm2.2 0a.5.5 0 0 1-.5-.5V8.7a.5.5 0 0 1 1 0v4.2a.5.5 0 0 1-.5.5zm2.6.05c-1.02 0-1.8-.78-1.8-1.8s.78-1.8 1.8-1.8 1.8.78 1.8 1.8-.78 1.8-1.8 1.8zm-6.4-2.55c-.46 0-.8.36-.8.82s.34.83.8.83.8-.36.8-.83-.34-.82-.8-.82zm6.4 0c-.47 0-.82.36-.82.82s.35.83.82.83.82-.36.82-.83-.35-.82-.82-.82z"/></svg>`,
    website: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38a16.5 16.5 0 0 0-.14 2c0 .68.05 1.35.14 2H4.26zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66a14.5 14.5 0 0 1-.16-2c0-.68.06-1.35.16-2h4.68c.1.65.16 1.32.16 2 0 .68-.06 1.35-.16 2zm.26 5.56A15.65 15.65 0 0 0 15.98 16h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.09-.65.14-1.32.14-2 0-.68-.05-1.35-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`
  };

  // 1. Áp dụng màu sắc & chế độ Sáng/Tối từ config
  function applyThemeConfig() {
    const root = document.documentElement;
    if (config.theme) {
      if (config.theme.accentPrimary) {
        root.style.setProperty("--accent-primary", config.theme.accentPrimary);
      }
      if (config.theme.accentSecondary) {
        root.style.setProperty("--accent-secondary", config.theme.accentSecondary);
      }

      const savedTheme = localStorage.getItem("linkpage-theme");
      if (!savedTheme) {
        if (config.theme.defaultMode === "light" || config.theme.defaultMode === "dark") {
          root.setAttribute("data-theme", config.theme.defaultMode);
        }
      }
    }
  }

  // 2. Render thông tin cá nhân
  function renderProfile() {
    const { profile, footer } = config;
    if (!profile) return;

    const avatarEl = document.getElementById("profileAvatar");
    const nameEl = document.getElementById("profileName");
    const verifiedEl = document.getElementById("verifiedBadge");
    const taglineEl = document.getElementById("profileTagline");
    const bioEl = document.getElementById("profileBio");
    const statusDot = document.querySelector(".status-dot");
    const footerEl = document.getElementById("footerText");

    if (profile.name) {
      nameEl.textContent = profile.name;
      document.title = `${profile.name} | Official Links`;
    }

    if (profile.avatar) {
      avatarEl.src = profile.avatar;
      avatarEl.alt = `Ảnh đại diện của ${profile.name || "tác giả"}`;
    }

    verifiedEl.hidden = !profile.verified;
    if (statusDot) {
      statusDot.style.display = profile.showOnlineDot ? "block" : "none";
    }

    taglineEl.textContent = profile.tagline || "";
    bioEl.textContent = profile.bio || "";
    if (footer && footer.text) {
      footerEl.textContent = footer.text;
    }
  }

  // 3. Render thanh mạng xã hội
  function renderSocials() {
    const socialBar = document.getElementById("socialBar");
    socialBar.innerHTML = "";

    if (!Array.isArray(config.socials) || config.socials.length === 0) {
      socialBar.style.display = "none";
      return;
    }

    config.socials.forEach((item) => {
      if (!item.url) return;
      const platformKey = (item.platform || "website").toLowerCase();
      const svgMarkup = SOCIAL_SVGS[platformKey] || SOCIAL_SVGS.website;

      const a = document.createElement("a");
      a.className = "social-link";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", item.label || platformKey);
      a.title = item.label || platformKey;
      a.innerHTML = svgMarkup;

      socialBar.appendChild(a);
    });
  }

  // 4. Render danh sách liên kết chính
  function renderLinks() {
    const linksList = document.getElementById("linksList");
    linksList.innerHTML = "";

    if (!Array.isArray(config.links)) return;

    config.links.forEach((item) => {
      const isCopy = item.type === "copy";
      const el = document.createElement(isCopy ? "button" : "a");
      el.className = "link-card";

      if (isCopy) {
        el.type = "button";
        el.addEventListener("click", () => {
          copyToClipboard(
            item.copyValue || item.subtitle || item.title,
            item.copySuccessText || "Đã sao chép!"
          );
        });
      } else {
        el.href = item.url || "#";
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }

      // Icon bên trái
      const iconBox = document.createElement("div");
      iconBox.className = "link-icon-box";
      const iconI = document.createElement("i");
      iconI.setAttribute("data-lucide", item.icon || (isCopy ? "copy" : "link"));
      iconBox.appendChild(iconI);

      // Nội dung giữa (Title, Badge, Subtitle)
      const content = document.createElement("div");
      content.className = "link-content";

      const titleRow = document.createElement("div");
      titleRow.className = "link-title-row";

      const titleSpan = document.createElement("span");
      titleSpan.className = "link-title";
      titleSpan.textContent = item.title || "";
      titleRow.appendChild(titleSpan);

      if (item.badge) {
        const badgeSpan = document.createElement("span");
        const badgeType = item.badgeType || "official";
        badgeSpan.className = `link-badge badge-${badgeType}`;
        badgeSpan.textContent = item.badge;
        titleRow.appendChild(badgeSpan);
      }

      content.appendChild(titleRow);

      if (item.subtitle) {
        const subEl = document.createElement("p");
        subEl.className = "link-subtitle";
        subEl.textContent = item.subtitle;
        content.appendChild(subEl);
      }

      // Icon hành động bên phải (Copy hoặc External Link)
      const actionBox = document.createElement("div");
      actionBox.className = "link-action-icon";
      const actionI = document.createElement("i");
      actionI.setAttribute("data-lucide", isCopy ? "copy" : "arrow-up-right");
      actionBox.appendChild(actionI);

      el.appendChild(iconBox);
      el.appendChild(content);
      el.appendChild(actionBox);

      linksList.appendChild(el);
    });
  }

  // 5. Xử lý sao chép vào Clipboard & Hiện Toast
  let toastTimeout;
  function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMessage");
    toastMsg.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  async function copyToClipboard(text, successMessage) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      showToast(successMessage);
    } catch (err) {
      showToast("Không thể sao chép tự động!");
    }
  }

  // 6. Xử lý nút chuyển đổi Dark / Light Mode & Chia sẻ trang
  function initControls() {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const sharePageBtn = document.getElementById("sharePageBtn");

    themeToggleBtn.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      try {
        localStorage.setItem("linkpage-theme", next);
      } catch (e) {}
    });

    sharePageBtn.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: config.profile ? config.profile.tagline : "",
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // Người dùng hủy share
        }
      } else {
        copyToClipboard(window.location.href, "Đã sao chép đường dẫn trang!");
      }
    });
  }

  // Khởi chạy ứng dụng
  function init() {
    applyThemeConfig();
    renderProfile();
    renderSocials();
    renderLinks();
    initControls();

    // Render toàn bộ icon từ Lucide CDN
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
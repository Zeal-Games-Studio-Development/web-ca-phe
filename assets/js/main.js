
// ============ STYLE MANAGER ============
const STYLE_SHEETS = {
  1: 'assets/css/style1-dark-luxury.css',
  2: 'assets/css/style2-fresh-garden.css',
  3: 'assets/css/style3-pure-minimal.css',
  4: 'assets/css/style4-vibrant-modern.css',
  5: 'assets/css/style5-ocean-depth.css'
};

function getCurrentStyle() {
  return parseInt(localStorage.getItem('cafeStyle') || '1');
}

function setStyle(styleId) {
  localStorage.setItem('cafeStyle', styleId);
  const link = document.getElementById('theme-stylesheet');
  if (link) link.href = STYLE_SHEETS[styleId];
  document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.style-btn[data-style="${styleId}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  updateStyleSwitcherLabel(styleId);
}

function updateStyleSwitcherLabel(id) {
  const style = STYLES.find(s => s.id === id);
  if (!style) return;
  const label = document.querySelector('.current-style-name');
  if (label) label.textContent = style.name;
}

function initStyleSwitcher() {
  const styleId = getCurrentStyle();
  const link = document.getElementById('theme-stylesheet');
  if (link) link.href = STYLE_SHEETS[styleId];
  
  const switcher = document.getElementById('style-switcher');
  if (!switcher) return;
  
  const btnContainer = switcher.querySelector('.style-btns');
  if (btnContainer && typeof STYLES !== 'undefined') {
    STYLES.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'style-btn' + (s.id === styleId ? ' active' : '');
      btn.dataset.style = s.id;
      btn.innerHTML = `<span class="style-dot"></span><span class="style-label"><strong>${s.name}</strong><small>${s.desc}</small></span>`;
      btn.onclick = () => setStyle(s.id);
      btnContainer.appendChild(btn);
    });
  }
  updateStyleSwitcherLabel(styleId);
}

// ============ NAVBAR ============
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) navMenu.classList.remove('active');
    });
  }
  
  // Active state based on URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-fade-up');
  if (!els.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  els.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ============ PRODUCT FILTERS ============
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  if (!filterBtns.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      
      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============ RENDER PRODUCTS ============
function renderProducts(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container || typeof CAFE_DATA === 'undefined') return;
  
  const products = limit ? CAFE_DATA.products.slice(0, limit) : CAFE_DATA.products;
  const catLabel = (cat) => {
    if (cat === 'hot') return '☕ Cà Phê Nóng';
    if (cat === 'iced') return '🧊 Cà Phê Đá';
    if (cat === 'bag') return '🎁 Cà Phê Túi/Gói';
    return cat;
  };
  container.innerHTML = products.map(p => `
    <div class="product-card animate-fade-up" data-cat="${p.category}" id="product-${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <p class="product-category">${catLabel(p.category)}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="product-btn" onclick="addToCart('${p.name}')">Đặt Ngay</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============ RENDER NEWS ============
function renderNews(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container || typeof CAFE_DATA === 'undefined') return;
  
  const news = limit ? CAFE_DATA.news.slice(0, limit) : CAFE_DATA.news;
  container.innerHTML = news.map(n => `
    <article class="news-card animate-fade-up" id="news-${n.id}">
      <div class="news-img">
        <img src="${n.img}" alt="${n.title}" loading="lazy">
      </div>
      <div class="news-body">
        <div class="news-meta">
          <span class="news-cat">${n.category}</span>
          <span class="news-date">📅 ${n.date}</span>
        </div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-excerpt">${n.excerpt}</p>
        <a href="news.html#news-${n.id}" class="news-link">Đọc Thêm →</a>
      </div>
    </article>
  `).join('');
}

// ============ RENDER PROCESS ============
function renderProcess(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof CAFE_DATA === 'undefined') return;
  
  container.innerHTML = CAFE_DATA.process.map((p, i) => `
    <div class="process-timeline-card animate-fade-up delay-${i % 3}" id="process-step-${i+1}">
      <div class="process-timeline-img">
        ${p.img ? `<img src="${p.img}" alt="${p.title}" loading="lazy">` : ''}
        <div class="process-step-badge">
          <span class="process-step-num">${p.step}</span>
        </div>
        ${p.location ? `<div class="process-location-tag">📍 ${p.location}</div>` : ''}
      </div>
      <div class="process-timeline-body">
        <div class="process-icon-wrap">${p.icon}</div>
        <h3 class="process-timeline-title">${p.title}</h3>
        <p class="process-timeline-desc">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// ============ TESTIMONIALS ============
const TESTIMONIALS = [
  { text: 'Cà phê ở đây thật sự tuyệt vời! Hương vị đậm đà, không đắng gắt, tôi uống mỗi sáng đều cảm thấy tỉnh táo và tràn đầy năng lượng cho cả ngày.', author: 'Nguyễn Minh Hải', role: 'Kỹ sư phần mềm', emoji: '👨‍💻' },
  { text: 'Lần đầu thử Cold Brew của quán là mê luôn! Vị ngọt thanh tự nhiên, không cần thêm đường. Không gian quán cũng rất đẹp và yên tĩnh.', author: 'Trần Thị Lan', role: 'Nhà thiết kế', emoji: '👩‍🎨' },
  { text: 'Đặt hàng online rất tiện lợi, giao hàng nhanh và cà phê vẫn nóng khi đến tay. Chất lượng ổn định qua từng lần. Sẽ tiếp tục ủng hộ lâu dài!', author: 'Lê Văn Phong', role: 'Giám đốc kinh doanh', emoji: '👨‍💼' },
];

function renderTestimonials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card animate-fade-up delay-${i}">
      <div class="stars">★★★★★</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.emoji}</div>
        <div>
          <p class="author-name">${t.author}</p>
          <p class="author-role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ============ CONTACT FORM ============
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Đã Gửi!';
    btn.style.opacity = '0.8';
    setTimeout(() => {
      btn.textContent = 'Gửi Tin Nhắn';
      btn.style.opacity = '1';
      form.reset();
    }, 3000);
  });
}

// ============ UTILITY ============
function addToCart(name) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `✓ Đã thêm <strong>${name}</strong> vào đơn hàng!`;
  toast.style.cssText = `position:fixed;bottom:30px;right:30px;background:var(--primary);color:white;padding:14px 22px;border-radius:8px;z-index:9999;font-size:0.9rem;animation:slideIn 0.3s ease;box-shadow:0 8px 30px rgba(0,0,0,0.2);`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initStyleSwitcher();
  initNavbar();
  initScrollAnimations();
  initProductFilters();
  initContactForm();
  renderProducts('products-grid');
  renderNews('news-grid');
  renderProcess('process-grid');
  renderTestimonials('testimonials-grid');
});

// Style Switcher Toggle
function toggleStyleSwitcher() {
  const panel = document.querySelector('.style-panel');
  if (panel) panel.classList.toggle('open');
}

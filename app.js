/**
 * Cheap and Genuine Nig. Ltd. — SPA + PWA
 * Order: https://wa.link/ejltj7
 */

const WA_LINK = "https://wa.link/ejltj7";

const PRODUCTS = [
  // Laptops first
  {
    id: 1,
    name: "HP EliteBook 840 G5",
    desc: "Core i5 · 8GB RAM · 256GB SSD · Business-ready.",
    price: 285000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=70&auto=format",
  },
  {
    id: 2,
    name: "Dell Latitude 5490",
    desc: "Core i5 · 8GB · 256GB SSD · Reliable office laptop.",
    price: 265000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac882e4f?w=500&q=70&auto=format",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    desc: "Core i5 · 16GB · 512GB SSD · Built for work.",
    price: 310000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=70&auto=format",
  },
  {
    id: 4,
    name: "MacBook Air 2017",
    desc: "i5 · 8GB · 128GB · Lightweight everyday use.",
    price: 295000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=70&auto=format",
  },
  {
    id: 5,
    name: "HP 15s Notebook",
    desc: "AMD / Intel options · 8GB · 256GB · Student & home.",
    price: 245000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&q=70&auto=format",
  },
  {
    id: 6,
    name: "Dell Inspiron 15",
    desc: "Core i3/i5 · Everyday productivity laptop.",
    price: 255000,
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=70&auto=format",
  },
  // Household
  {
    id: 7,
    name: "Foldable Mosquito Net 6×6",
    desc: "Quality foldable net. Affordable genuine household essential.",
    price: 11500,
    category: "Household",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=70&auto=format",
  },
  {
    id: 8,
    name: "Foldable Mosquito Net 6×7",
    desc: "Larger foldable mosquito net for bigger beds.",
    price: 13000,
    category: "Household",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=70&auto=format",
  },
  {
    id: 9,
    name: "Electric Kettle 1.8L",
    desc: "Fast-boil household kettle. Everyday home use.",
    price: 9500,
    category: "Household",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=70&auto=format",
  },
  {
    id: 10,
    name: 'Standing Fan 16"',
    desc: "Reliable standing fan for home & office.",
    price: 18500,
    category: "Household",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=70&auto=format",
  },
  {
    id: 11,
    name: "Extension Socket 6-Way",
    desc: "Surge-friendly multi-socket for home gadgets.",
    price: 4500,
    category: "Household",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=70&auto=format",
  },
  {
    id: 12,
    name: "Rechargeable Lantern",
    desc: "Bright lantern for home backup lighting.",
    price: 7500,
    category: "Household",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e28b0?w=500&q=70&auto=format",
  },
  // Cars
  {
    id: 13,
    name: "Toyota Corolla (Tokunbo)",
    desc: "Clean tokunbo Corolla. Inspect & drive. Enquire for year/options.",
    price: 0,
    category: "Cars",
    img: "https://images.unsplash.com/photo-1623869675781-0f2749990470?w=500&q=70&auto=format",
  },
  {
    id: 14,
    name: "Honda Accord (Tokunbo)",
    desc: "Comfortable sedan. Available units change — WhatsApp for current stock.",
    price: 0,
    category: "Cars",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&q=70&auto=format",
  },
  {
    id: 15,
    name: "Toyota Camry (Tokunbo)",
    desc: "Popular family sedan. Ask for inspection & papers.",
    price: 0,
    category: "Cars",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=70&auto=format",
  },
  {
    id: 16,
    name: "Lexus RX (Tokunbo)",
    desc: "SUV comfort. Stock varies — request current listings.",
    price: 0,
    category: "Cars",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=70&auto=format",
  },
  // More
  {
    id: 17,
    name: "Wireless Mouse",
    desc: "Simple reliable wireless mouse for laptops.",
    price: 4500,
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=70&auto=format",
  },
  {
    id: 18,
    name: 'Laptop Bag 15.6"',
    desc: "Padded bag for daily commute & office.",
    price: 8500,
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=70&auto=format",
  },
];

const PICKS = [1, 17, 13, 3, 8];

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("cng_cart") || "[]");
} catch (_) {
  cart = [];
}

let page = "home";
let filter = "All";
let searchQ = "";
let draftSearch = "";
let carouselTimer = null;
let carouselIndex = 0;

function money(n) {
  if (!n) return "Enquire";
  return "₦" + Number(n).toLocaleString();
}

function img(src, alt) {
  return `<img src="${src}" alt="${alt || ""}" loading="lazy" decoding="async"
    onerror="this.onerror=null;this.style.display='none';this.parentNode.insertAdjacentHTML('beforeend','<div class=\\'img-fallback\\'><svg width=\\'36\\' height=\\'36\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'M21 15l-5-5L5 21\\'/></svg></div>');">`;
}

function saveCart() {
  try {
    localStorage.setItem("cng_cart", JSON.stringify(cart));
  } catch (_) {}
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const body = document.getElementById("cartBody");
  const totalEl = document.getElementById("cartTotal");
  if (!badge || !body || !totalEl) return;
  const count = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
  badge.style.display = count ? "flex" : "none";
  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty">Nothing added yet</p>';
    totalEl.textContent = "0";
    return;
  }
  body.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-img">${img(item.img, item.name)}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.category}</p>
        <div class="qty-row">
          <button type="button" onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button type="button" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">${item.price ? money(item.price * item.qty) : "Enquire"}</div>
    </div>`,
    )
    .join("");
  const priced = cart.filter((i) => i.price);
  totalEl.textContent = priced.length
    ? money(priced.reduce((s, i) => s + i.price * i.qty, 0))
    : String(count);
}

function addToCart(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((c) => c.id === id);
  if (existing) existing.qty += 1;
  else
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      img: p.img,
      category: p.category,
      qty: 1,
    });
  saveCart();
}

function changeQty(id, d) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
  closeCart();
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

function openWA(text) {
  // Official order short link from their Facebook
  if (!text) {
    window.open(WA_LINK, "_blank");
    return;
  }
  // Prefer prefilled message via generic open — short link may not accept text;
  // still open order line; user can paste. Also try encoding as query if supported.
  window.open(WA_LINK, "_blank");
  // Copy-friendly: also attempt clipboard for the message
  try {
    if (navigator.clipboard && text) navigator.clipboard.writeText(text);
  } catch (_) {}
}

function productCard(p) {
  return `
    <div class="product-card">
      <div class="product-img">
        ${img(p.img, p.name)}
        <span class="product-tag">${p.category}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-foot">
          <span class="price">${money(p.price)}</span>
          <button class="btn-add" type="button" onclick="addToCart(${p.id})">${p.price ? "Add" : "Enquire"}</button>
        </div>
      </div>
    </div>`;
}

function startCarousel() {
  stopCarousel();
  const track = document.getElementById("carouselTrack");
  if (!track || !track.children.length) return;
  const n = track.children.length;
  carouselIndex = 0;
  carouselTimer = setInterval(() => {
    carouselIndex = (carouselIndex + 1) % n;
    goToSlide(carouselIndex);
  }, 4000);
  const wrap = document.querySelector(".carousel-wrap");
  if (wrap) {
    wrap.onmouseenter = stopCarousel;
    wrap.onmouseleave = startCarousel;
  }
}
function stopCarousel() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}
function goToSlide(i) {
  const track = document.getElementById("carouselTrack");
  if (!track) return;
  const n = track.children.length || 1;
  carouselIndex = ((i % n) + n) % n;
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document
    .querySelectorAll(".carousel-dot")
    .forEach((d, idx) => d.classList.toggle("active", idx === carouselIndex));
}

function renderHome() {
  const pickItems = PICKS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    Boolean,
  );
  const slides = pickItems
    .map(
      (m) => `
    <div class="carousel-slide">
      <div class="slide-img">${img(m.img, m.name)}</div>
      <div class="slide-body">
        <span class="tag">${m.category}</span>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div style="display:flex;align-items:center;gap:0.85rem;flex-wrap:wrap">
          <span class="price" style="font-size:1.15rem">${money(m.price)}</span>
          <button class="btn-add" type="button" onclick="addToCart(${m.id})">${m.price ? "Add" : "Enquire"}</button>
        </div>
      </div>
    </div>`,
    )
    .join("");
  const dots = pickItems
    .map(
      (_, i) =>
        `<button type="button" class="carousel-dot ${i === 0 ? "active" : ""}" onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"></button>`,
    )
    .join("");

  const featured = PRODUCTS.filter((p) => [1, 2, 7, 8, 13, 17].includes(p.id));

  return `
  <section class="hero">
    <div class="hero-inner">
      <div>
        <div class="hero-badge">Akure · Nationwide delivery</div>
        <h1>Affordable Quality<br><span>ALWAYS</span></h1>
        <p>Laptops, household essentials, cars and more — genuine value from Cheap and Genuine Nig. Ltd.</p>
        <button class="btn-primary" data-page="shop">Shop Now</button>
      </div>
      <div class="hero-visual">
        ${img("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=75&auto=format", "Gadgets")}
        <div class="hero-pill">Laptops · Household · Cars</div>
      </div>
    </div>
  </section>

  <div class="features">
    <div class="feature-card">
      <div class="fi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
      <h3>Laptops</h3>
      <p>Business & everyday PCs</p>
    </div>
    <div class="feature-card">
      <div class="fi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg></div>
      <h3>Household</h3>
      <p>Nets, fans & home needs</p>
    </div>
    <div class="feature-card">
      <div class="fi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14v-5H5v5zM5 12l2-5h10l2 5"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg></div>
      <h3>Cars</h3>
      <p>Tokunbo options · Enquire</p>
    </div>
    <div class="feature-card">
      <div class="fi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
      <h3>Delivery</h3>
      <p>Nationwide shipping</p>
    </div>
  </div>

  <section class="section">
    <div class="section-head">
      <h2>Shop by Category</h2>
      <p>Start with what you need</p>
      <div class="underline"></div>
    </div>
    <div class="cat-grid">
      <button type="button" class="cat-card" data-page="shop" onclick="window._catJump='Laptops'">
        <div class="ci"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
        <h3>Laptops</h3>
        <p>First priority stock</p>
      </button>
      <button type="button" class="cat-card" data-page="shop" onclick="window._catJump='Household'">
        <div class="ci"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div>
        <h3>Household</h3>
        <p>Nets & home essentials</p>
      </button>
      <button type="button" class="cat-card" data-page="shop" onclick="window._catJump='Cars'">
        <div class="ci"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14v-5H5v5zM5 12l2-5h10l2 5"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg></div>
        <h3>Cars</h3>
        <p>Enquire current units</p>
      </button>
      <button type="button" class="cat-card" data-page="shop" onclick="window._catJump='Accessories'">
        <div class="ci"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div>
        <h3>More</h3>
        <p>Accessories & extras</p>
      </button>
    </div>
  </section>

  <section class="section specials-bg">
    <div class="section-head">
      <h2>Featured Picks</h2>
      <p>Auto-rotating highlights across categories</p>
      <div class="underline"></div>
    </div>
    <div class="carousel-wrap">
      <button type="button" class="carousel-nav carousel-prev" onclick="goToSlide(carouselIndex-1)" aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <div class="carousel-track" id="carouselTrack">${slides}</div>
      <button type="button" class="carousel-nav carousel-next" onclick="goToSlide(carouselIndex+1)" aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
    <div class="carousel-dots">${dots}</div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Popular Right Now</h2>
      <p>A mix from laptops, household and more</p>
      <div class="underline"></div>
    </div>
    <div class="grid-3">${featured.map(productCard).join("")}</div>
    <div style="text-align:center;margin-top:1.5rem">
      <button class="btn-primary" data-page="shop" style="background:var(--teal);color:#fff">View Full Shop</button>
    </div>
  </section>

  <div class="cta">
    <h2>Order on WhatsApp</h2>
    <p>Add items or message the official line — nationwide delivery available.</p>
    <button class="btn-primary" type="button" id="ctaWa">Open WhatsApp</button>
  </div>`;
}

function filteredList() {
  return PRODUCTS.filter((p) => {
    const okCat = filter === "All" || p.category === filter;
    const q = searchQ.toLowerCase().trim();
    const okQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return okCat && okQ;
  });
}

function renderShop() {
  if (window._catJump) {
    filter = window._catJump;
    window._catJump = null;
  }
  const cats = ["All", "Laptops", "Household", "Cars", "Accessories"];
  const list = filteredList();

  return `
  <section class="page-hero">
    <div class="label">Catalogue</div>
    <h1>Shop</h1>
    <p>Laptops · Household · Cars · More</p>
  </section>
  <section class="section">
    <div class="search-bar">
      <input type="search" id="shopSearch" placeholder="Type full keyword, then Search or press Enter" value="${(draftSearch || searchQ).replace(/"/g, "&quot;")}" autocomplete="off" />
      <button type="button" id="shopSearchBtn">Search</button>
    </div>
    <p class="search-hint">Search runs only when you press Enter or tap Search — not on every letter.</p>
    <div class="chips">
      ${cats.map((c) => `<button type="button" class="chip ${filter === c ? "active" : ""}" data-filter="${c}">${c}</button>`).join("")}
    </div>
    <div class="grid-3">
      ${list.length ? list.map(productCard).join("") : '<p class="empty-msg">No items match. Try another word or category.</p>'}
    </div>
  </section>`;
}

function renderAbout() {
  return `
  <section class="page-hero">
    <div class="label">About</div>
    <h1>Cheap and Genuine</h1>
    <p>Nig. Ltd · Akure</p>
  </section>
  <section class="section">
    <div class="story-block">
      <div class="story-text">
        <h2>Affordable quality ALWAYS</h2>
        <div class="underline" style="margin-left:0"></div>
        <p><strong>Cheap and Genuine Nig. Ltd.</strong> supplies laptops, household essentials, cars and related items with a focus on value and nationwide reach.</p>
        <p>From foldable mosquito nets to business laptops and tokunbo vehicles, the brand positions as a practical one-stop source — order via WhatsApp and get delivery support across Nigeria.</p>
        <p>Based around <strong>Akure</strong>, with an active WhatsApp order line and marketplace group for offers.</p>
      </div>
      <div class="story-img">
        ${img("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75&auto=format", "Store")}
      </div>
    </div>
  </section>
  <div class="cta">
    <h2>Need a quote?</h2>
    <p>Cars and some laptop units are stock-based — message the order line.</p>
    <button class="btn-primary" type="button" data-page="contact">Contact Us</button>
  </div>`;
}

function renderContact() {
  return `
  <section class="page-hero">
    <div class="label">Contact</div>
    <h1>Get in Touch</h1>
    <p>Orders & enquiries</p>
  </section>
  <section class="section">
    <div class="contact-grid">
      <div>
        <h2 style="font-size:1.35rem;margin-bottom:0.4rem">Order line</h2>
        <div class="underline" style="margin-left:0;margin-bottom:1rem"></div>
        <p style="color:var(--muted);margin-bottom:1.2rem;font-size:0.92rem">Use the official WhatsApp link for the fastest response.</p>
        <div class="info-row">
          <div class="ii"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div><h4>Location</h4><span>Akure, Ondo State · Nationwide delivery</span></div>
        </div>
        <div class="info-row">
          <div class="ii"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
          <div><h4>WhatsApp</h4><span>Official order link (wa.link)</span></div>
        </div>
        <div class="info-row">
          <div class="ii"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
          <div><h4>Marketplace</h4><span>WhatsApp group for ongoing offers</span></div>
        </div>
        <button type="button" class="btn-primary" style="background:var(--teal);color:#fff;margin-top:0.5rem" id="openWaBtn">Open WhatsApp Order</button>
      </div>
      <form class="contact-form" id="contactForm">
        <div class="form-group"><label>Full Name</label><input type="text" id="cfName" required placeholder="Your name" /></div>
        <div class="form-group"><label>Phone</label><input type="tel" id="cfPhone" required placeholder="080..." /></div>
        <div class="form-group"><label>Subject</label><input type="text" id="cfSubject" required placeholder="Laptop / Household / Car" /></div>
        <div class="form-group"><label>Message</label><textarea id="cfMessage" required placeholder="What do you need?"></textarea></div>
        <button type="submit" class="btn-send">Send (opens WhatsApp)</button>
      </form>
    </div>
  </section>`;
}

const pages = {
  home: renderHome,
  shop: renderShop,
  about: renderAbout,
  contact: renderContact,
};

function navigate(name) {
  if (!pages[name]) name = "home";
  page = name;
  stopCarousel();
  document.querySelectorAll(".nav-link, .bn-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.page === name);
  });
  document.title =
    "Cheap and Genuine | " +
    ({ home: "Home", shop: "Shop", about: "About", contact: "Contact" }[name] ||
      "Home");
  const app = document.getElementById("app");
  app.style.opacity = "0";
  setTimeout(() => {
    app.innerHTML = pages[name]();
    app.style.opacity = "1";
    bindPageEvents(name);
    if (name === "home") startCarousel();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 110);
}

function runSearch() {
  const input = document.getElementById("shopSearch");
  draftSearch = input ? input.value : "";
  searchQ = draftSearch;
  navigate("shop");
}

function bindPageEvents(name) {
  if (name === "shop") {
    document.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        filter = btn.dataset.filter;
        searchQ = searchQ;
        navigate("shop");
      });
    });
    const input = document.getElementById("shopSearch");
    const btn = document.getElementById("shopSearchBtn");
    if (input) {
      input.addEventListener("input", () => {
        draftSearch = input.value;
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          runSearch();
        }
      });
    }
    if (btn) btn.addEventListener("click", runSearch);
  }
  if (name === "contact") {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const n = document.getElementById("cfName").value.trim();
        const phone = document.getElementById("cfPhone").value.trim();
        const subject = document.getElementById("cfSubject").value.trim();
        const message = document.getElementById("cfMessage").value.trim();
        const text = `Hello Cheap and Genuine,\n\nName: ${n}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`;
        openWA(text);
        form.reset();
      });
    }
    const openWa = document.getElementById("openWaBtn");
    if (openWa) openWa.addEventListener("click", () => openWA());
  }
  if (name === "home") {
    const cta = document.getElementById("ctaWa");
    if (cta) cta.addEventListener("click", () => openWA());
  }
}

let lastY = 0;
function onScroll() {
  const nav = document.getElementById("bottomNav");
  if (!nav || window.innerWidth >= 768) return;
  const y = window.scrollY;
  if (y > lastY && y > 80) nav.classList.add("hide");
  else nav.classList.remove("hide");
  lastY = y;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-page]");
    if (t) {
      e.preventDefault();
      navigate(t.dataset.page);
    }
  });
  document.getElementById("floatCart").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("clearCart").addEventListener("click", () => {
    if (cart.length && confirm("Clear list?")) clearCart();
  });
  document.getElementById("checkoutWa").addEventListener("click", () => {
    if (!cart.length) {
      alert("Add items first.");
      return;
    }
    const lines = cart.map(
      (i) =>
        `• ${i.qty}x ${i.name} (${i.category}) – ${i.price ? money(i.price * i.qty) : "Enquire"}`,
    );
    const text = `Hello Cheap and Genuine,\n\nI would like to order / enquire:\n\n${lines.join("\n")}\n\nPlease confirm. Thank you!`;
    openWA(text);
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  updateCartUI();
  navigate("home");
});

window.addToCart = addToCart;
window.changeQty = changeQty;
window.goToSlide = goToSlide;
window.carouselIndex = 0;

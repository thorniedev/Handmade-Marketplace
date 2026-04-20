const siteName = "Sombok Craft";

const navItems = [
  { href: "index.html", label: "Home" },
  { href: "shop.html", label: "Shop" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" },
];

const products = [
  {
    slug: "krama-silk-scarf",
    category: "Khmer Textile",
    name: "Krama Silk Scarf",
    price: "$24",
    badge: "Best Seller",
    colors: "Rose clay / sand / indigo",
    description:
      "A modern interpretation of the traditional Khmer krama, this scarf is handwoven with a soft silk-cotton blend for everyday comfort. The warm earthy palette and lightweight texture make it easy to style while still honoring Cambodian craft heritage.",
    material: "Silk and cotton blend",
    origin: "Takeo, Cambodia",
    size: "180 cm x 60 cm",
    care: "Cold hand wash",
    availability: "In Stock",
    image:
      "https://i.pinimg.com/1200x/62/4e/90/624e900e22b7ff6217e7838fa4171dd8.jpg",
  },
  {
    slug: "palm-weave-basket",
    category: "Village Basketry",
    name: "Rattan Palm Market Basket",
    price: "$32",
    badge: "New Drop",
    colors: "Natural palm / honey",
    description:
      "A hand-braided market basket inspired by everyday Khmer village life. Its sturdy weave and natural finish make it ideal for storage, gifting, or carrying fresh market produce.",
    material: "Dried palm leaf",
    origin: "Kampong Thom, Cambodia",
    size: "34 cm diameter",
    care: "Dry cloth only",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "lacquer-ceremonial-tray",
    category: "Ceremonial Decor",
    name: "Khmer Lacquer Offering Tray",
    price: "$46",
    badge: "Limited",
    colors: "Lacquer red / gold",
    description:
      "A lacquer tray inspired by Khmer ceremonial presentation pieces, finished with deep red tones and gold detail for a refined heritage look.",
    material: "Wood with lacquer finish",
    origin: "Phnom Penh, Cambodia",
    size: "40 cm x 28 cm",
    care: "Wipe gently with dry cloth",
    availability: "Limited Stock",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "temple-candle-holder",
    category: "Temple Woodcraft",
    name: "Apsara Temple Candle Holder",
    price: "$28",
    badge: "Artisan Pick",
    colors: "Smoked teak",
    description:
      "Carved from teak with temple-inspired lines, this candle holder brings the warmth of Khmer woodcraft into modern homes and gift collections.",
    material: "Teak wood",
    origin: "Siem Reap, Cambodia",
    size: "22 cm height",
    care: "Keep dry and polish lightly",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "lotus-pendant-set",
    category: "Khmer Jewelry",
    name: "Lotus Motif Pendant Set",
    price: "$38",
    badge: "Gift Favorite",
    colors: "Gold / pearl white",
    description:
      "A graceful jewelry set inspired by Khmer lotus ornament, designed for elegant occasions while still feeling connected to local cultural symbolism.",
    material: "Alloy with enamel detail",
    origin: "Phnom Penh, Cambodia",
    size: "Pendant 4 cm",
    care: "Store in dry pouch",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "earthen-clay-vase",
    category: "Khmer Pottery",
    name: "Battambang Clay Vase",
    price: "$34",
    badge: "Studio Piece",
    colors: "Clay beige",
    description:
      "This Battambang-style clay vase brings a grounded handmade feel to shelves and dining spaces, with warm earth tones and a softly textured finish.",
    material: "Fired clay",
    origin: "Battambang, Cambodia",
    size: "26 cm height",
    care: "Indoor display only",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "woven-floor-mat",
    category: "Khmer Home Decor",
    name: "Handwoven Reed Floor Mat",
    price: "$29",
    badge: "Home Essential",
    colors: "Sand / woven natural",
    description:
      "A handwoven reed mat inspired by traditional Khmer home interiors, adding natural texture and warmth to entryways, bedrooms, and quiet corners.",
    material: "Natural fibers",
    origin: "Kandal, Cambodia",
    size: "80 cm x 50 cm",
    care: "Shake clean and air dry",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "silk-shoulder-bag",
    category: "Khmer Textile",
    name: "Sampot Silk Shoulder Bag",
    price: "$41",
    badge: "New Arrival",
    colors: "Terracotta / woven tan",
    description:
      "A shoulder bag inspired by sampot textile patterns, blending practical everyday use with the beauty of Khmer woven fabric details.",
    material: "Woven silk blend",
    origin: "Takeo, Cambodia",
    size: "28 cm x 20 cm",
    care: "Spot clean only",
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
];

const featuredProducts = products.slice(0, 4);

function currentPage() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function renderNavbar() {
  const activePage = currentPage();
  return `
    <header class="sticky top-0 z-50">
      <div class="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div class="glass-card rounded-full border border-white/20 bg-white/80 shadow-lg shadow-orange-900/10 ring-1 ring-orange-100/50 dark:border-white/10 dark:bg-slate-950/75 dark:ring-white/10">
          <div class="flex items-center justify-between px-5 py-3">
            <a href="index.html" class="flex items-center gap-3">
              <img
                src="assets/mini-project-logo-01.png"
                alt="${siteName} logo"
                class="h-11 w-11 rounded-full object-cover shadow-lg shadow-orange-500/20"
              />
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">Khmer Handmade</p>
                <p class="font-khmer text-lg font-bold text-slate-900 dark:text-white">${siteName}</p>
              </div>
            </a>
            <nav class="hidden items-center gap-2 lg:flex">
              ${navItems
                .map(
                  (item) => `
                    <a
                      href="${item.href}"
                      class="rounded-full px-4 py-2 text-sm font-semibold transition ${
                        activePage === item.href
                          ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 dark:bg-orange-500 dark:text-slate-950"
                          : "text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-orange-300"
                      }"
                    >
                      ${item.label}
                    </a>
                  `
                )
                .join("")}
            </nav>
            <div class="flex items-center gap-2">
              <button
                type="button"
                data-dark-toggle
                class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-gray-100 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
                aria-pressed="false"
              >
                <svg
                  class="block h-6 w-6 fill-violet-700 dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  class="hidden h-6 w-6 fill-yellow-500 dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                data-mobile-toggle
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                aria-label="Open menu"
                aria-expanded="false"
              >
                ☰
              </button>
            </div>
          </div>
          <div data-mobile-menu class="hidden border-t border-slate-200/70 px-4 py-4 dark:border-white/10 lg:hidden">
            <div class="grid gap-2">
              ${navItems
                .map(
                  (item) => `
                    <a
                      href="${item.href}"
                      class="rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        activePage === item.href
                          ? "bg-orange-500 text-slate-950"
                          : "bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-white/10"
                      }"
                    >
                      ${item.label}
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="mt-20 border-t border-white/10 bg-slate-950 text-slate-300">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-[1.3fr,0.8fr,0.9fr,0.9fr]">
          <div class="max-w-md">
            <div class="mb-4 flex items-center gap-4">
              <img
                src="assets/mini-project-logo-01.png"
                alt="${siteName} logo"
                class="h-12 w-12 rounded-full object-cover shadow-lg shadow-orange-500/20"
              />
              <div>
                <p class="text-xs uppercase tracking-[0.4em] text-orange-300">Khmer Marketplace</p>
                <h2 class="font-khmer text-2xl font-bold text-white">${siteName}</h2>
              </div>
            </div>
            <p class="text-sm leading-7 text-slate-400">
              A curated Khmer handmade marketplace connecting local artisans with customers who value weaving,
              woodcraft, jewelry, and meaningful home decor from across Cambodia.
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <a href="https://facebook.com" class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-orange-300"><i class="fa-brands fa-facebook-f"></i><span>Facebook</span></a>
              <a href="https://instagram.com" class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-orange-300"><i class="fa-brands fa-instagram"></i><span>Instagram</span></a>
              <a href="https://tiktok.com" class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-orange-300"><i class="fa-brands fa-tiktok"></i><span>TikTok</span></a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white">Explore</h3>
            <div class="grid gap-3 text-sm">
              ${navItems
                .map(
                  (item) => `
                    <a href="${item.href}" class="text-slate-400 transition hover:text-orange-300">${item.label}</a>
                  `
                )
                .join("")}
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white">Collections</h3>
            <div class="grid gap-3 text-sm text-slate-400">
              <p>Silk & krama</p>
              <p>Wood decor</p>
              <p>Jewelry</p>
              <p>Basketry</p>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white">Contact</h3>
            <div class="grid gap-3 text-sm text-slate-400">
              <p class="inline-flex items-center gap-3"><i class="fa-solid fa-location-dot text-orange-300"></i><span>Street 310, Phnom Penh</span></p>
              <p class="inline-flex items-center gap-3"><i class="fa-solid fa-envelope text-orange-300"></i><span>hello@sombokcraft.com</span></p>
              <p class="inline-flex items-center gap-3"><i class="fa-solid fa-phone text-orange-300"></i><span>+855 12 345 678</span></p>
              <p class="inline-flex items-center gap-3"><i class="fa-regular fa-clock text-orange-300"></i><span>Daily 8:00 AM to 8:00 PM</span></p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 pt-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ${siteName}. Crafted for Khmer makers.</p>
          <p>Responsive, dark mode ready, and styled with local Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderFeaturedCards(limit = 4) {
  return featuredProducts
    .slice(0, limit)
    .map(
      (product) => `
        <article class="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/10 dark:border-white/10 dark:bg-slate-900">
          <div class="relative h-64 overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-orange-600 shadow dark:bg-slate-950/90 dark:text-orange-300">${product.badge}</div>
          </div>
          <div class="space-y-3 p-5">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">${product.name}</h3>
              <span class="text-lg font-extrabold text-orange-500">${product.price}</span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">${product.colors}</p>
            <a href="product.html?product=${product.slug}" class="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-orange-500 dark:text-white">
              View details
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function applyTheme(isDark) {
  const root = document.documentElement;
  const body = document.body;

  root.classList.toggle("dark", isDark);
  if (body) body.classList.toggle("dark", isDark);

  document.querySelectorAll("[data-dark-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  });
}

function setupDarkMode() {
  const saved = localStorage.getItem("sombok-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = saved ? saved === "dark" : prefersDark;

  applyTheme(useDark);

  document.querySelectorAll("[data-dark-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const isDark = !document.documentElement.classList.contains("dark");
      localStorage.setItem("sombok-theme", isDark ? "dark" : "light");
      applyTheme(isDark);
    });
  });
}

function setupMobileMenu() {
  const button = document.querySelector("[data-mobile-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isHidden));
  });
}

function hydrateProductPage() {
  const productRoot = document.querySelector("[data-product-page]");
  if (!productRoot) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("product");
  const product = products.find((item) => item.slug === slug) || products[0];

  const mappings = [
    ["[data-product-title]", product.name],
    ["[data-product-category]", product.category],
    ["[data-product-price]", product.price],
    ["[data-product-description]", product.description],
    ["[data-product-material]", product.material],
    ["[data-product-origin]", product.origin],
    ["[data-product-size]", product.size],
    ["[data-product-care]", product.care],
    ["[data-product-crumb]", product.name],
  ];

  mappings.forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  });

  const availabilityNode = document.querySelector("[data-product-availability]");
  if (availabilityNode) {
    availabilityNode.textContent = product.availability;
    availabilityNode.className =
      product.availability === "In Stock"
        ? "font-semibold text-emerald-600 dark:text-emerald-300"
        : "font-semibold text-orange-500";
  }

  const imageNode = document.querySelector("[data-product-image]");
  if (imageNode) {
    imageNode.src = product.image;
    imageNode.alt = `${product.name} large product image`;
  }

  document.title = `${product.name} | ${siteName}`;

  const relatedMount = document.querySelector("[data-related-grid]");
  if (relatedMount) {
    relatedMount.innerHTML = products
      .filter((item) => item.slug !== product.slug)
      .slice(0, 3)
      .map(
        (item) => `
          <article class="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/10 dark:border-white/10 dark:bg-slate-900">
            <div class="relative h-64 overflow-hidden">
              <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-orange-600 shadow dark:bg-slate-950/90 dark:text-orange-300">${item.badge}</div>
            </div>
            <div class="space-y-3 p-5">
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">${item.name}</h3>
                <span class="text-lg font-extrabold text-orange-500">${item.price}</span>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400">${item.colors}</p>
              <a href="product.html?product=${item.slug}" class="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-orange-500 dark:text-white">
                View details
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        `
      )
      .join("");
  }
}

function mountSharedComponents() {
  const navbarMount = document.querySelector("[data-navbar]");
  const footerMount = document.querySelector("[data-footer]");
  const featuredMount = document.querySelector("[data-featured-grid]");

  if (navbarMount) navbarMount.innerHTML = renderNavbar();
  if (footerMount) footerMount.innerHTML = renderFooter();
  if (featuredMount) {
    const count = Number(featuredMount.getAttribute("data-count")) || 4;
    featuredMount.innerHTML = renderFeaturedCards(count);
  }

  setupDarkMode();
  setupMobileMenu();
  hydrateProductPage();
}

document.addEventListener("DOMContentLoaded", mountSharedComponents);

/* ================= THIẾT LẬP CHUNG ================= */
:root {
    --primary-color: #0056b3;
    --secondary-color: #d9534f;
    --bg-light: #f4f6f9;
    --text-dark: #333;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: var(--bg-light);
    color: var(--text-dark);
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* ================= HEADER ================= */
.header-main {
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 10px 0;
}

.header-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.menu-toggle {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary-color);
}

.logo-box {
    display: block;
    max-height: 45px;
}
#main-logo {
    max-height: 45px;
    width: auto;
    object-fit: contain;
}

.search-box {
    flex: 1;
    max-width: 500px;
    display: flex;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    overflow: hidden;
}
.search-box input {
    flex: 1;
    padding: 8px 12px;
    border: none;
    outline: none;
}
.search-box button {
    background: var(--primary-color);
    color: #fff;
    border: none;
    padding: 0 15px;
    font-weight: bold;
    cursor: pointer;
}

.cart-box {
    font-size: 20px;
    cursor: pointer;
    position: relative;
}
.cart-count {
    background: var(--secondary-color);
    color: #fff;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -10px;
}

/* ================= SIDE MENU & SUBMENU (MENU CHA - CON) ================= */
.side-menu {
    position: fixed;
    top: 0;
    left: -300px;
    width: 280px;
    height: 100vh;
    background: #fff;
    z-index: 10001;
    transition: left 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.2);
    overflow-y: auto;
}
.side-menu.active {
    left: 0;
}

.side-menu-header {
    background: var(--primary-color);
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.close-btn { cursor: pointer; font-size: 18px; }

.menu-list { padding: 10px 15px; }
.menu-list > li > a, .submenu-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-weight: bold;
    font-size: 15px;
}

/* Kiểu dáng cho Menu Con (Submenu PIN) */
.submenu {
    display: none; /* Mặc định ẩn */
    background: #f8f9fa;
    padding-left: 15px;
    border-left: 3px solid var(--primary-color);
    margin: 5px 0 10px 0;
}
.submenu li a {
    display: block;
    padding: 8px 0;
    font-size: 14px;
    color: #555;
    font-weight: normal;
    border-bottom: 1px dashed #e0e0e0;
}
.submenu li:last-child a { border-bottom: none; }

/* Khi mở Submenu */
.has-submenu.open .submenu {
    display: block;
}
.has-submenu.open .arrow {
    transform: rotate(180deg);
}
.arrow {
    font-size: 11px;
    transition: transform 0.3s ease;
    color: #888;
}

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 10000;
    display: none;
}
.menu-overlay.active { display: block; }

/* ================= QUICK NAV (DANH MỤC TRÒN CUỘN NGANG) ================= */
.quick-nav {
    background: #fff;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
}
.quick-cat-list {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 5px;
}
.quick-cat-list::-webkit-scrollbar { height: 4px; }
.quick-cat-list::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }

.quick-cat-list li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    min-width: 75px;
    text-align: center;
}
.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #eef4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 6px;
    border: 1px solid #cce0ff;
}

/* ================= MAIN CONTENT & PRODUCTS ================= */
.main-content { margin-top: 20px; }
.main-banner {
    width: 100%;
    border-radius: 8px;
    display: block;
}

.product-section { margin-top: 30px; }
.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-left: 4px solid var(--primary-color);
    padding-left: 10px;
}
.section-heading h2 { font-size: 18px; color: var(--primary-color); }
.view-all { font-size: 13px; color: #666; }

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
}
.product-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    position: relative;
    border: 1px solid #eee;
}
.badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background: var(--secondary-color);
    color: #fff;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: bold;
}
.product-img-box {
    height: 180px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product-img-box img { max-width: 100%; max-height: 100%; object-fit: contain; }
.product-info { padding: 12px; text-align: center; border-top: 1px solid #f0f0f0; }
.product-name { font-size: 14px; height: 38px; overflow: hidden; margin-bottom: 8px; }
.price-current { color: var(--secondary-color); font-weight: bold; font-size: 16px; }

/* ================= FOOTER & FLOATING BUTTONS ================= */
.footer-main { background: #1a1a1a; color: #ccc; margin-top: 40px; padding: 30px 0 10px; font-size: 14px; }
.footer-content h3 { color: #fff; margin-bottom: 10px; }
.footer-content a { color: #5db0ff; }
.social-links { margin-top: 15px; display: flex; gap: 10px; }
.social-links a { background: #333; color: #fff; padding: 6px 12px; border-radius: 4px; font-size: 12px; }
.footer-bottom { text-align: center; margin-top: 20px; padding-top: 10px; border-top: 1px solid #333; font-size: 12px; }

.floating-actions { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 999; }
.btn-float { width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; box-shadow: 0 3px 8px rgba(0,0,0,0.3); }
.btn-float.call { background: #27ae60; font-size: 20px; }
.btn-float.zalo { background: #0068ff; font-size: 12px; }

/* RESPONSIVE DÀNH CHO DI ĐỘNG */
@media (max-width: 768px) {
    .header-flex { flex-wrap: wrap; }
    .search-box { order: 3; width: 100%; max-width: 100%; }
    .product-grid { grid-template-columns: repeat(2, 1fr); }
}

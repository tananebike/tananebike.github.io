document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    const overlay = document.getElementById('menu-overlay');

    // Bấm ☰ mở menu
    menuBtn.addEventListener('click', function() {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Bấm nút ✖ hoặc bấm ra ngoài màn hình để đóng menu
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    function closeMenu() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
});

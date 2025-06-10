// 移动端菜单功能
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSeasonMenu = document.getElementById('mobileSeasonMenu');
    const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
    const mobileActivityMenu = document.getElementById('mobileActivityMenu');
    const mobileActivitySubmenu = document.getElementById('mobileActivitySubmenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('invisible');
            mobileMenu.classList.toggle('-translate-y-full');
        });
    }

    if (mobileSeasonMenu && mobileSeasonSubmenu) {
        mobileSeasonMenu.addEventListener('click', function() {
            mobileSeasonSubmenu.classList.toggle('hidden');
        });
    }

    if (mobileActivityMenu && mobileActivitySubmenu) {
        mobileActivityMenu.addEventListener('click', function() {
            mobileActivitySubmenu.classList.toggle('hidden');
        });
    }
}); 
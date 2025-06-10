// 移动端菜单功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSeasonMenu = document.getElementById('mobileSeasonMenu');
    const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
    const mobileActivityMenu = document.getElementById('mobileActivityMenu');
    const mobileActivitySubmenu = document.getElementById('mobileActivitySubmenu');

    // 移动端菜单按钮点击事件
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            // 切换移动端菜单的显示状态
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('invisible');
            mobileMenu.classList.toggle('-translate-y-full');
        });
    }

    // 移动端季节菜单点击事件
    if (mobileSeasonMenu && mobileSeasonSubmenu) {
        mobileSeasonMenu.addEventListener('click', function() {
            // 切换季节子菜单的显示状态
            mobileSeasonSubmenu.classList.toggle('hidden');
        });
    }

    // 移动端活动菜单点击事件
    if (mobileActivityMenu && mobileActivitySubmenu) {
        mobileActivityMenu.addEventListener('click', function() {
            // 切换活动子菜单的显示状态
            mobileActivitySubmenu.classList.toggle('hidden');
        });
    }

    // 初始化所有轮播图
    initializeCarousels();
});

// 轮播图功能
function initializeCarousels() {
    // 获取所有轮播图容器
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = track.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelector('.carousel-indicators');
        
        // 创建轮播图指示器
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (index === 0) indicator.classList.add('active');
            indicators.appendChild(indicator);
        });
        
        // 设置轮播图初始状态
        let currentIndex = 0;
        updateCarousel();
        
        // 自动轮播
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);
        
        // 更新轮播图状态
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            // 更新指示器状态
            const indicators = carousel.querySelectorAll('.carousel-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
    });
}

// 上一张幻灯片
function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    // 获取当前索引
    const currentIndex = Array.from(indicators).findIndex(indicator => indicator.classList.contains('active'));
    // 计算新的索引
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    // 更新轮播图状态
    track.style.transform = `translateX(-${newIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === newIndex);
    });
}

// 下一张幻灯片
function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    // 获取当前索引
    const currentIndex = Array.from(indicators).findIndex(indicator => indicator.classList.contains('active'));
    // 计算新的索引
    const newIndex = (currentIndex + 1) % slides.length;
    
    // 更新轮播图状态
    track.style.transform = `translateX(-${newIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === newIndex);
    });
} 
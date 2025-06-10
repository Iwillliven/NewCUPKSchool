// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏滚动效果
    initNavbarScroll();
    
    // 初始化季节切换功能
    initSeasonTabs();
    
    // 初始化图片懒加载
    initLazyLoading();
    
    // 初始化活动卡片动画
    initActivityAnimations();
});

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.getElementById('main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 滚动时导航栏背景变化
        if (scrollTop > 50) {
            navbar.classList.add('bg-white', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
        
        // 滚动时导航栏显示/隐藏
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 季节切换功能
function initSeasonTabs() {
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    
    seasonTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标季节ID
            const targetSeason = this.getAttribute('href').substring(1);
            
            // 隐藏所有季节内容
            seasonContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // 显示目标季节内容
            document.getElementById(targetSeason).style.display = 'block';
            
            // 更新活动标签样式
            seasonTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            
            // 平滑滚动到季节内容
            document.getElementById(targetSeason).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    }
}

// 活动卡片动画
function initActivityAnimations() {
    const activityItems = document.querySelectorAll('.activity-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    activityItems.forEach(item => {
        observer.observe(item);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 季节画廊图片模态框
function openGalleryModal(imageSrc, imageAlt) {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageSrc;
    modalCaption.textContent = imageAlt;
    modal.classList.remove('hidden');
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.add('hidden');
}

// 关闭模态框的按键事件
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGalleryModal();
    }
});    

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化移动端菜单
    initMobileMenu();
    // 初始化轮播图
    initCarousel();
    // 初始化活动动画
    initActivityAnimations();
});

// 移动端菜单初始化
function initMobileMenu() {
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
}

// 轮播图初始化
function initCarousel() {
    // 获取轮播图容器
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    // 获取轮播图相关元素
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
}

// 活动卡片动画初始化
function initActivityAnimations() {
    // 获取所有活动卡片
    const activityItems = document.querySelectorAll('.activity-item');
    
    // 创建交叉观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当元素进入视口时添加动画类
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // 观察所有活动卡片
    activityItems.forEach(item => {
        observer.observe(item);
    });
}
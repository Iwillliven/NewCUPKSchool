// 首页轮播图交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
});

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    // 显示指定幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // 移除所有指示器的活动状态
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // 显示当前幻灯片
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }
    
    // 下一张幻灯片
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }
    
    // 开始自动轮播
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // 停止自动轮播
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // 初始化显示第一张幻灯片
    showSlide(0);
    
    // 开始自动轮播
    startSlideshow();
    
    // 上一张/下一张按钮事件
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
        
        nextButton.addEventListener('click', function() {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });
    
    // 鼠标悬停时暂停轮播
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
}
    
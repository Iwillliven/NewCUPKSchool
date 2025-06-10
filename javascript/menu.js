// 下拉菜单交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    dropdownTriggers.forEach(trigger => {
        // 鼠标进入显示下拉菜单
        trigger.addEventListener('mouseenter', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.classList.remove('hidden');
                // 添加显示动画
                dropdownContent.classList.add('animate-fadeIn');
            }
        });
        
        // 鼠标离开隐藏下拉菜单
        trigger.addEventListener('mouseleave', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                // 添加隐藏动画
                dropdownContent.classList.add('animate-fadeOut');
                setTimeout(() => {
                    dropdownContent.classList.add('hidden');
                    dropdownContent.classList.remove('animate-fadeOut');
                }, 300);
            }
        });
    });
    
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // 切换按钮图标
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 关闭移动菜单（如果打开）
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
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
         // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }, false);
        
        // 移动端菜单交互
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('menuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            menuBtn.addEventListener('click', function() {
                if (mobileMenu.classList.contains('invisible')) {
                    mobileMenu.classList.remove('invisible', 'opacity-0', '-translate-y-full');
                    mobileMenu.classList.add('opacity-100', 'translate-y-0');
                    menuBtn.innerHTML = '<i class="fa fa-times text-xl"></i>';
                } else {
                    mobileMenu.classList.add('invisible', 'opacity-0', '-translate-y-full');
                    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
                    menuBtn.innerHTML = '<i class="fa fa-bars text-xl"></i>';
                }
            });
            
            // 移动端季节菜单交互
            const mobileSeasonMenu = document.getElementById('mobileSeasonMenu');
            const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
            
            if (mobileSeasonMenu && mobileSeasonSubmenu) {
                mobileSeasonMenu.addEventListener('click', function() {
                    if (mobileSeasonSubmenu.classList.contains('hidden')) {
                        mobileSeasonSubmenu.classList.remove('hidden');
                    } else {
                        mobileSeasonSubmenu.classList.add('hidden');
                    }
                });
            }
        });

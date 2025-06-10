
        // 平滑滚动功能
        document.addEventListener('DOMContentLoaded', function() {
            // 移动导航菜单控制
            const menuBtn = document.getElementById('menuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileSeasonBtn = document.getElementById('mobileSeasonMenu')?.querySelector('button');
            const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
            
            // 移动端菜单切换
            if (menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', function() {
                    const isVisible = mobileMenu.classList.contains('opacity-100');
                    if (isVisible) {
                        mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-full');
                    } else {
                        mobileMenu.classList.remove('opacity-0', 'invisible', '-translate-y-full');
                        mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
                    }
                });
            }
            
            // 移动端子菜单切换
            if (mobileSeasonBtn && mobileSeasonSubmenu) {
                mobileSeasonBtn.addEventListener('click', function() {
                    mobileSeasonSubmenu.classList.toggle('hidden');
                });
            }
            
            // 导航栏滚动效果
            const mainNav = document.getElementById('mainNav');
            if (mainNav) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 50) {
                        mainNav.classList.add('py-2', 'shadow-md');
                        mainNav.classList.remove('py-3', 'shadow-sm');
                    } else {
                        mainNav.classList.add('py-3', 'shadow-sm');
                        mainNav.classList.remove('py-2', 'shadow-md');
                    }
                });
            }
            
            // 平滑滚动到内容区
            const scrollBtn = document.querySelector('button.glow');
            const contentSection = document.getElementById('content-section');
            
            if (scrollBtn && contentSection) {
                scrollBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    contentSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // 如果移动菜单是打开的，点击后关闭
                    if (mobileMenu && mobileMenu.classList.contains('opacity-100')) {
                        mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-full');
                    }
                });
            }
            
            // 为导航链接添加平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // 如果移动菜单是打开的，点击后关闭
                        if (mobileMenu && mobileMenu.classList.contains('opacity-100')) {
                            mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                            mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-full');
                        }
                    }
                });
            });
        });
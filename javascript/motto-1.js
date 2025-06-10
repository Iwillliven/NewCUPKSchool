// 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'shadow-md');
                nav.classList.remove('py-3', 'shadow-sm');
            } else {
                nav.classList.add('py-3', 'shadow-sm');
                nav.classList.remove('py-2', 'shadow-md');
            }
        });
        let lastScrollTop = 0;
        const nav = document.getElementById('mainNav');
        const navHeight = nav.offsetHeight;

        window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
        // 向下滚动时隐藏导航栏
         if (currentScroll > lastScrollTop && currentScroll > navHeight) {
             nav.style.transform = 'translateY(-100%)';
             nav.style.transition = 'transform 0.3s ease';
        } 
        // 向上滚动或回到顶部时显示导航栏
         else {
             nav.style.transform = 'translateY(0)';
        }
    
        // 页面顶部状态处理
        if (currentScroll <= 50) {
             nav.classList.add('py-3', 'shadow-sm');
             nav.classList.remove('py-2', 'shadow-md');
        } else {
             nav.classList.add('py-2', 'shadow-md');
             nav.classList.remove('py-3', 'shadow-sm');
        }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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
            
            // 视频模态框交互
            const videoModal = document.getElementById('videoModal');
            const modalVideo = document.getElementById('modalVideo');
            const closeModal = document.getElementById('closeModal');
            const videoCards = document.querySelectorAll('.cursor-pointer[data-video]');
            
            videoCards.forEach(card => {
                card.addEventListener('click', function() {
                    const videoUrl = this.getAttribute('data-video');
                    modalVideo.src = videoUrl + '?autoplay=1';
                    videoModal.classList.remove('invisible', 'opacity-0');
                    videoModal.classList.add('opacity-100');
                    document.body.style.overflow = 'hidden'; // 防止背景滚动
                });
            });
            
            closeModal.addEventListener('click', function() {
                modalVideo.src = ''; // 停止视频播放
                videoModal.classList.add('invisible', 'opacity-0');
                videoModal.classList.remove('opacity-100');
                document.body.style.overflow = ''; // 恢复背景滚动
            });
            
            // 点击模态框背景也可以关闭
            videoModal.addEventListener('click', function(e) {
                if (e.target === videoModal) {
                    modalVideo.src = '';
                    videoModal.classList.add('invisible', 'opacity-0');
                    videoModal.classList.remove('opacity-100');
                    document.body.style.overflow = '';
                }
            });
        });
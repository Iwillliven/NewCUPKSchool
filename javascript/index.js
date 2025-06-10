// 导航栏滚动效果
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 移动端菜单切换
document.getElementById('menu-toggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// 回到顶部按钮
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
    backToTopButton.classList.remove('invisible', 'opacity-0');
  } else {
    backToTopButton.classList.remove('visible');
    backToTopButton.classList.add('invisible', 'opacity-0');
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 图片懒加载
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = [].slice.call(document.querySelectorAll("img"));
  
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.classList.add("fade-in");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
    
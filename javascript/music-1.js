document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const bgMusic = document.getElementById('bgMusic');
    const progressBar = document.getElementById('progressBar');
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            playIcon.className = 'fa fa-play';
        } else {
            bgMusic.play();
            playIcon.className = 'fa fa-pause';
        }
        isPlaying = !isPlaying;
    });

    // 更新进度条
    bgMusic.addEventListener('timeupdate', () => {
        const progress = (bgMusic.currentTime / bgMusic.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    // 点击进度条跳转
    progressBar.parentElement.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = x / width;
        bgMusic.currentTime = percentage * bgMusic.duration;
    });
});
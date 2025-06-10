document.addEventListener('DOMContentLoaded', function() {
    const musicButton = document.getElementById('musicButton');
    const buttonIcon = document.getElementById('buttonIcon');
    const buttonText = document.getElementById('buttonText');
    const bgMusic = document.getElementById('bgMusic');
    
    // 音乐播放状态
    let isPlaying = false;
    
    // 按钮点击事件
    musicButton.addEventListener('click', function() {
        if (isPlaying) {
            // 暂停音乐
            bgMusic.pause();
            buttonIcon.classList.remove('fa-pause');
            buttonIcon.classList.add('fa-play');
            buttonText.textContent = '探索秋日美景';
            isPlaying = false;
        } else {
            // 播放音乐
            bgMusic.play().catch(error => {
                console.error('播放失败:', error);
                // 播放失败时的处理
                buttonIcon.classList.remove('fa-pause');
                buttonIcon.classList.add('fa-play');
                buttonText.textContent = '音乐加载失败';
            });
            buttonIcon.classList.remove('fa-play');
            buttonIcon.classList.add('fa-pause');
            buttonText.textContent = '正在聆听...';
            isPlaying = true;
        }
    });
    
    // 监听音乐播放结束事件
    bgMusic.addEventListener('ended', function() {
        buttonIcon.classList.remove('fa-pause');
        buttonIcon.classList.add('fa-play');
        buttonText.textContent = '探索秋日美景';
        isPlaying = false;
    });
});
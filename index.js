window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
        video.style.transform = `translateY(${scrollPosition / 2}px)`;
    }
});

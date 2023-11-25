let lastScrollTop = 0;

document.addEventListener('scroll', function() {
    let fadeDiv = document.getElementById('hero-id');
    let currentOpacity = window.getComputedStyle(fadeDiv).opacity;
    let scrollTop = window.scrollY;
    
    if (scrollTop < 15) {
        fadeDiv.style.opacity = 1;
    } 
    else if (scrollTop > lastScrollTop) {
        // Scrolling down
        fadeDiv.style.opacity = Math.max(0, parseFloat(currentOpacity) - 0.025);
    } 
    else {
        // Scrolling up
        fadeDiv.style.opacity = Math.min(1, parseFloat(currentOpacity) + 0.025);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });
    
    const div = document.querySelectorAll('.hidden');
    div.forEach((el) => observer.observe(el));
});

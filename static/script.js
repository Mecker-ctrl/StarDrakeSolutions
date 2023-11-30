let lastScrollTop = 0;

// document.addEventListener('scroll', function() {
//     let fadeDiv = document.getElementById('hero-id');
//     let currentOpacity = window.getComputedStyle(fadeDiv).opacity;
//     let scrollTop = window.scrollY;
    
//     if (scrollTop < 15) {
//         fadeDiv.style.opacity = 1;
//     } 
//     else if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         fadeDiv.style.opacity = Math.max(0, parseFloat(currentOpacity) - 0.025);
//     } 
//     else {
//         // Scrolling up
//         fadeDiv.style.opacity = Math.min(1, parseFloat(currentOpacity) + 0.025);
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const classes = entry.target.classList;

            if(entry.isIntersecting){
                if(classes.contains("hidden"))
                {
                    transform(entry, "show", "hidden")
                } 
                else if(classes.contains("off-screen")){
                    transform(entry, "slide-in", "off-screen")
                }
                else if(classes.contains("compressed")){
                    transform(entry, "expanded", "compressed")
                }
            }
            else{
                if(classes.contains("show"))
                {
                    transform(entry, "hidden", "show")
                } 
                else if(classes.contains("slide-in")){
                    transform(entry, "off-screen", "slide-in")
                }
                else if(classes.contains("expanded")){
                    transform(entry, "compressed", "expanded")
                }
            }
        });
    });
    
    const divhid = document.querySelectorAll('.hidden');
    const divoff = document.querySelectorAll('.off-screen');
    const divcomp = document.querySelectorAll('.compressed');

    divoff.forEach((el) => observer.observe(el));
    divhid.forEach((el) => observer.observe(el));
    divcomp.forEach((el) => observer.observe(el));
});


function transform(item, add, remove){
    item.target.classList.add(add);
    item.target.classList.remove(remove);
}
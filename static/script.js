document.addEventListener('scroll', function() {
    var galItems = document.getElementsByClassName("gallery-element");

    Array.from(galItems).forEach(element => {
        element.addEventListener('mouseenter', function(){
            element.style.zIndex = 10;
        });
    
        element.addEventListener('mouseleave', function(){
            element.style.zIndex = 0;
        });
    });
});


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
                else if(classes.contains("off-screen-down")){
                    if(classes.contains("first")){
                        transform(entry, "slide-in-up-first", "off-screen-down")
                    }
                    else{
                        transform(entry, "slide-in-up", "off-screen-down")
                    }
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
            }
        });
    });
    
    const divhid = document.querySelectorAll('.hidden');
    const divoff = document.querySelectorAll('.off-screen');
    const divcomp = document.querySelectorAll('.compressed');
    const divdown = document.querySelectorAll('.off-screen-down');

    divoff.forEach((el) => observer.observe(el));
    divhid.forEach((el) => observer.observe(el));
    divcomp.forEach((el) => observer.observe(el));
    divdown.forEach((el) => observer.observe(el));
});


function transform(item, add, remove){
    item.target.classList.add(add);
    item.target.classList.remove(remove);
}

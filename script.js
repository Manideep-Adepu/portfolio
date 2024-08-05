document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('.section');
    let options = {
        threshold: 0.5
    };
    
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
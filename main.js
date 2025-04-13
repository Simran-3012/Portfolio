document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Animate progress bars when section comes into view
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-level') + '%';
            bar.style.width = targetWidth;
        });
    }
    
    // Create intersection observer
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateProgressBars();
            observer.unobserve(entries[0].target); // Stop observing after animation
        }
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
    
    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--progress-width', level + '%');
    });
});

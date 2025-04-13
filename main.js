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
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to animate progress bars when they come into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        if (isInViewport(bar) && bar.style.width === '0px' || bar.style.width === '') {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 200); // Small delay for better visual effect
        }
    });
}

// Initialize progress bars on load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial width to 0
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = '0';
    });
    
    // Check if skills section is already in viewport on page load
    setTimeout(animateProgressBars, 500);
});

// Animate progress bars when scrolling
window.addEventListener('scroll', animateProgressBars);

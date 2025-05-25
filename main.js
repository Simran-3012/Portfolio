// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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
        const level = bar.getAttribute('data-level');
        const parent = bar.parentElement;
        const percentageSpan = parent.querySelector('.percentage');

        // Animate only if not already set
        if (bar.style.width === '0%' || bar.style.width === '') {
            setTimeout(() => {
                bar.style.width = level + '%';
                if (percentageSpan) {
                    percentageSpan.textContent = level + '%';
                }
            }, 200); // Delay for better effect
        }
    });
}

// Initialize progress bars on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = '0%'; // Set initial width
        const parent = bar.parentElement;
        const percentageSpan = parent.querySelector('.percentage');
        if (percentageSpan) {
            percentageSpan.textContent = '0%';
        }
    });

    // Check if skills section is already in viewport
    setTimeout(animateProgressBars, 500);
});

// Trigger animation on scroll
window.addEventListener('scroll', animateProgressBars);

// Optional: Use IntersectionObserver for better performance
const skillsSection = document.querySelector('.skills');
if ('IntersectionObserver' in window && skillsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            animateProgressBars();
            observer.unobserve(entries[0].target); // Only trigger once
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
}

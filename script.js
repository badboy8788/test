// DOM elements
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Sidebar toggle functionality
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when sidebar is open on mobile
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close sidebar function
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
hamburgerMenu.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on a sidebar link (mobile)
const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // If screen becomes larger than mobile breakpoint, ensure sidebar is visible
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close sidebar with Escape key
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    // Swipe right to open sidebar (only on mobile)
    if (swipeDistance > swipeThreshold && window.innerWidth <= 768 && !sidebar.classList.contains('active')) {
        toggleSidebar();
    }
    
    // Swipe left to close sidebar (only on mobile)
    if (swipeDistance < -swipeThreshold && window.innerWidth <= 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
}

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to show the loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links
const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// User profile dropdown simulation
const userProfile = document.querySelector('.user-profile');
userProfile.addEventListener('click', () => {
    // You can add dropdown functionality here
    console.log('User profile clicked');
});

// Add hover effects for better UX
document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced resize handler
const debouncedResizeHandler = debounce(() => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
}, 250);

window.addEventListener('resize', debouncedResizeHandler);

// Add CSS custom properties for dynamic theming
document.documentElement.style.setProperty('--primary-color', '#ffd700');
document.documentElement.style.setProperty('--bg-dark', '#000');
document.documentElement.style.setProperty('--bg-sidebar', '#1a1a2e');

// Console log for debugging
console.log('OTT Dashboard loaded successfully!');
console.log('Responsive sidebar functionality active');
console.log('Mobile breakpoint: 768px');
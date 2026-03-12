// ===================================
// REVERSIFY - Enhanced JavaScript
// ===================================

// ===================================
// DATA & STATE
// ===================================

const requests = [
    {
        id: 1,
        title: "iPhone 14 Pro Max 256GB",
        category: "Electronics",
        price: "₹85,000",
        location: "Mumbai, MH",
        timeAgo: "2h ago",
        urgent: true,
        bids: 5,
        avatars: [
            "https://i.pravatar.cc/100?img=1",
            "https://i.pravatar.cc/100?img=2",
            "https://i.pravatar.cc/100?img=3"
        ]
    },
    {
        id: 2,
        title: "Gaming Laptop (RTX 3060)",
        category: "Electronics",
        price: "₹70,000",
        location: "Pune, MH",
        timeAgo: "5h ago",
        urgent: false,
        bids: 2,
        avatars: [
            "https://i.pravatar.cc/100?img=4",
            "https://i.pravatar.cc/100?img=5"
        ]
    },
    {
        id: 3,
        title: "Used Honda City 2018",
        category: "Vehicles",
        price: "₹8,00,000",
        location: "Delhi, DL",
        timeAgo: "1d ago",
        urgent: true,
        bids: 12,
        avatars: [
            "https://i.pravatar.cc/100?img=6",
            "https://i.pravatar.cc/100?img=7",
            "https://i.pravatar.cc/100?img=8"
        ]
    },
    {
        id: 4,
        title: "2BHK Rent in Andheri",
        category: "Real Estate",
        price: "₹45,000/mo",
        location: "Mumbai, MH",
        timeAgo: "3h ago",
        urgent: false,
        bids: 8,
        avatars: [
            "https://i.pravatar.cc/100?img=9",
            "https://i.pravatar.cc/100?img=10",
            "https://i.pravatar.cc/100?img=11"
        ]
    },
    {
        id: 5,
        title: "Sony A7III Mirrorless Camera",
        category: "Electronics",
        price: "₹1,20,000",
        location: "Bangalore, KA",
        timeAgo: "30m ago",
        urgent: true,
        bids: 1,
        avatars: [
            "https://i.pravatar.cc/100?img=12"
        ]
    },
    {
        id: 6,
        title: "KTM Duke 390 2021",
        category: "Vehicles",
        price: "₹2,10,000",
        location: "Hyderabad, TS",
        timeAgo: "4d ago",
        urgent: false,
        bids: 0,
        avatars: []
    },
    {
        id: 7,
        title: "MacBook Pro M2 16GB",
        category: "Electronics",
        price: "₹1,45,000",
        location: "Chennai, TN",
        timeAgo: "1h ago",
        urgent: true,
        bids: 7,
        avatars: [
            "https://i.pravatar.cc/100?img=13",
            "https://i.pravatar.cc/100?img=14",
            "https://i.pravatar.cc/100?img=15"
        ]
    },
    {
        id: 8,
        title: "Designer Sarees Collection",
        category: "Fashion",
        price: "₹25,000",
        location: "Kolkata, WB",
        timeAgo: "6h ago",
        urgent: false,
        bids: 3,
        avatars: [
            "https://i.pravatar.cc/100?img=16",
            "https://i.pravatar.cc/100?img=17"
        ]
    }
];

let currentFilter = 'all';
let searchQuery = '';

// ===================================
// THEME MANAGEMENT
// ===================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a little bounce animation
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 200);
});

// ===================================
// SWIPER INITIALIZATION (Logo Animation)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const logoSwiper = new Swiper('.logo-swiper .swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// ===================================
// ANIMATED COUNTERS (Hero Stats)
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number
        if (element.textContent.includes('M')) {
            element.textContent = '$' + (current / 1000000).toFixed(1) + 'M+';
        } else if (element.textContent.includes('k')) {
            element.textContent = (current / 1000).toFixed(0) + 'k+';
        } else if (element.textContent.includes('hr')) {
            element.textContent = Math.floor(current) + 'hr';
        }
    }, 16);
}

// Initialize counters when hero section is visible
const observeCounters = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = document.querySelectorAll('.stat-item');
            statItems.forEach(item => {
                const number = item.querySelector('.stat-number');
                const targetValue = parseInt(item.dataset.count);
                if (targetValue && number) {
                    animateCounter(number, targetValue);
                }
            });
            observeCounters.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    observeCounters.observe(heroSection);
}

// ===================================
// MARKETPLACE RENDERING
// ===================================

const grid = document.getElementById('requestsGrid');
const filterControls = document.getElementById('filterControls');
const marketplaceSearch = document.getElementById('marketplaceSearch');

function renderCards(filterCategory = 'all', search = '') {
    if (!grid) return;
    
    grid.innerHTML = "";
    
    let filtered = requests;
    
    // Apply category filter
    if (filterCategory !== 'all') {
        filtered = filtered.filter(r => 
            r.category.toLowerCase() === filterCategory.toLowerCase()
        );
    }
    
    // Apply search filter
    if (search) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.location.toLowerCase().includes(search.toLowerCase()) ||
            r.category.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);">
                <i class="fa-solid fa-inbox" style="font-size: 4rem; opacity: 0.3; margin-bottom: 20px;"></i>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">No demands found</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach((r, index) => {
        const card = document.createElement("div");
        card.className = "request-card glass animate-on-scroll";
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Generate avatars HTML
        let avatarsHTML = r.avatars
            .slice(0, 3)
            .map(url => `<div class="avatar" style="background-image: url('${url}')"></div>`)
            .join('');
        
        if (r.bids > r.avatars.length) {
            avatarsHTML += `<div class="avatar" style="background: var(--bg-elevated); display:flex; align-items:center; justify-content:center; font-size: 0.75rem; font-weight: bold; color: var(--text-muted);">+${r.bids - r.avatars.length}</div>`;
        }
        
        if (r.bids === 0) {
            avatarsHTML = `<div style="font-size: 0.9rem; color: var(--text-muted);">No bids yet</div>`;
        }
        
        const tagHTML = r.urgent 
            ? `<div class="urgent-tag"><i class="fa-solid fa-fire"></i> Urgent</div>` 
            : `<div class="category-tag">${r.category}</div>`;
        
        card.innerHTML = `
            <div class="card-header">
                ${tagHTML}
                <span class="meta-item"><i class="fa-regular fa-clock"></i> ${r.timeAgo}</span>
            </div>
            
            <h3 class="request-title">${r.title}</h3>
            
            <div class="request-meta">
                <span class="meta-item">
                    <i class="fa-solid fa-location-dot"></i> ${r.location}
                </span>
                <span class="meta-item">
                    <i class="fa-solid fa-tag"></i> ${r.category}
                </span>
            </div>
            
            <div class="target-price">
                ${r.price} <span>Target</span>
            </div>
            
            <div class="bidders">
                <div class="avatars">
                    ${avatarsHTML}
                </div>
                ${r.bids > 0 
                    ? `<div class="bidders-info"><strong>${r.bids} Sellers</strong> bidding</div>` 
                    : `<div class="bidders-info" style="margin-left:0;">Be the first to bid</div>`
                }
            </div>
            
            <button class="btn btn-primary card-action" onclick="viewDemand(${r.id})">
                ${r.bids > 0 ? 'View Offers' : 'Place Offer'}
            </button>
        `;
        
        grid.appendChild(card);
    });
    
    // Re-observe for scroll animations
    observeScrollAnimations();
}

// Initial render
renderCards(currentFilter, searchQuery);

// ===================================
// FILTERING LOGIC
// ===================================

if (filterControls) {
    const chips = filterControls.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Remove active from all
            chips.forEach(c => c.classList.remove('active'));
            // Add active to clicked
            chip.classList.add('active');
            // Update filter and render
            currentFilter = chip.dataset.filter;
            renderCards(currentFilter, searchQuery);
        });
    });
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================

if (marketplaceSearch) {
    marketplaceSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCards(currentFilter, searchQuery);
    });
}

// Quick search in hero
const quickSearchInput = document.getElementById('quickSearchInput');
if (quickSearchInput) {
    quickSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            quickPost();
        }
    });
}

// ===================================
// VIEW TOGGLE (Grid/List)
// ===================================

const viewBtns = document.querySelectorAll('.view-btn');
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const view = btn.dataset.view;
        if (grid) {
            if (view === 'list') {
                grid.style.gridTemplateColumns = '1fr';
            } else {
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(340px, 1fr))';
            }
        }
    });
});

// ===================================
// LOAD MORE FUNCTIONALITY
// ===================================

const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
        
        // Simulate loading
        setTimeout(() => {
            loadMoreBtn.innerHTML = 'Load More Demands';
            // In a real app, fetch more data here
            alert('This would load more demands from the server!');
        }, 1500);
    });
}

// ===================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ===================================

function observeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', observeScrollAnimations);

// ===================================
// QUICK POST FUNCTIONALITY
// ===================================

function quickPost() {
    const input = document.getElementById('quickSearchInput');
    const query = input ? input.value.trim() : '';
    
    if (query) {
        // Store the query and redirect
        localStorage.setItem('demandQuery', query);
        window.location.href = 'post-demand.html';
    } else {
        alert('Please enter what you\'re looking for');
    }
}

// ===================================
// VIEW DEMAND DETAILS
// ===================================

function viewDemand(id) {
    // Store demand ID and redirect
    localStorage.setItem('selectedDemandId', id);
    window.location.href = `demand-details.html?id=${id}`;
}

// ===================================
// INTERACTIVE DEMO
// ===================================

function nextDemoStep(stepNum) {
    const steps = document.querySelectorAll('.demo-step');
    steps.forEach(step => step.classList.remove('active'));
    
    const nextStep = document.getElementById(`demoStep${stepNum}`);
    if (nextStep) {
        nextStep.classList.add('active');
    }
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// DYNAMIC TIME UPDATES
// ===================================

function updateTimes() {
    // In a real app, this would update the timeAgo fields based on actual timestamps
    // For demo purposes, we'll just keep them static
}

setInterval(updateTimes, 60000); // Update every minute

// ===================================
// NOTIFICATION SYSTEM (Placeholder)
// ===================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-left: 4px solid var(--${type === 'success' ? 'success' : 'primary'});
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 40px var(--shadow);
        z-index: 1000;
        max-width: 350px;
        animation: slide-in-right 0.4s ease;
        backdrop-filter: blur(20px);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slide-out-right 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// ===================================
// EASTER EGG: Konami Code
// ===================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 You found the secret! Enjoy 10% off your first transaction!', 'success');
        konamiCode = [];
    }
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log(`
%c🚀 REVERSIFY - The Next Gen E-Commerce
%c
Built with passion and cutting-edge technology.
Want to join our team? Check out our careers page!

%cTip: Try the Konami Code! ↑↑↓↓←→←→BA
`, 
'color: #ff5e00; font-size: 20px; font-weight: bold;',
'color: #00d2ff; font-size: 14px;',
'color: #a0a0b0; font-size: 12px;'
);

// ===================================
// PERFORMANCE MONITORING
// ===================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
        }
    });
}

// ===================================
// SERVICE WORKER REGISTRATION (PWA)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ===================================
// ANALYTICS TRACKING (Placeholder)
// ===================================

function trackEvent(eventName, eventData = {}) {
    // In production, send to analytics service
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics
    // gtag('event', eventName, eventData);
    
    // Example: Mixpanel
    // mixpanel.track(eventName, eventData);
}

// Track page view
trackEvent('page_view', {
    page: window.location.pathname,
    theme: htmlElement.getAttribute('data-theme')
});

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('marketplaceSearch') || document.getElementById('quickSearchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // T: Toggle theme
    if (e.key === 't' && !e.target.matches('input, textarea')) {
        themeToggle.click();
    }
});

// ===================================
// COPY TO CLIPBOARD UTILITY
// ===================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===================================
// EXPORT FOR GLOBAL USE
// ===================================

window.reversify = {
    quickPost,
    viewDemand,
    nextDemoStep,
    showNotification,
    copyToClipboard,
    trackEvent
};

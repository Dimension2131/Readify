
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScrolling();
    initScrollAnimations();
    initTooltips();
    initBackToTop();
});


function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                document.body.style.overflow = 'hidden';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Reset hamburger animation
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href.includes('.html')) return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                if (entry.target.classList.contains('fade-in-on-scroll')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                }
                
                if (entry.target.classList.contains('slide-up-on-scroll')) {
                    entry.target.style.animation = 'slideUp 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-on-scroll, .slide-up-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    if (!document.getElementById('tooltip-styles')) {
        const style = document.createElement('style');
        style.id = 'tooltip-styles';
        style.textContent = `
            .tooltip {
                position: absolute;
                background-color: var(--color-primary);
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: var(--radius-sm);
                font-size: 0.875rem;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s ease;
                z-index: 1000;
                max-width: 200px;
                text-align: center;
                box-shadow: var(--shadow-md);
            }
            .tooltip:after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: var(--color-primary) transparent transparent transparent;
            }
        `;
        document.head.appendChild(style);
    }
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            if (!tooltipText) return;
            
            tooltip.textContent = tooltipText;
            tooltip.style.opacity = '1';
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

function initBackToTop() {
    if (!document.getElementById('back-to-top')) {
        const button = document.createElement('button');
        button.id = 'back-to-top';
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);
        
        if (!document.getElementById('back-to-top-styles')) {
            const style = document.createElement('style');
            style.id = 'back-to-top-styles';
            style.textContent = `
                .back-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 50px;
                    height: 50px;
                    background-color: var(--color-primary);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: var(--shadow-md);
                }
                .back-to-top.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .back-to-top:hover {
                    background-color: var(--color-primary-light);
                    transform: translateY(-3px);
                }
            `;
            document.head.appendChild(style);
        }
        
        window.addEventListener('scroll', toggleBackToTop);

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        toggleBackToTop();
    }
}

function toggleBackToTop() {
    const button = document.getElementById('back-to-top');
    if (button) {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }
}

function getReadingStats() {
    const completedBooks = JSON.parse(localStorage.getItem('readify_completed_books') || '[]');
    const savedProgress = JSON.parse(localStorage.getItem('readify_progress') || '[]');
    
    const totalBooks = completedBooks.length;
    const totalPages = completedBooks.reduce((sum, book) => sum + (book.pages || 0), 0);
    
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthBooks = completedBooks.filter(book => {
        const bookDate = new Date(book.date);
        return bookDate.getMonth() === currentMonth && bookDate.getFullYear() === currentYear;
    }).length;

    const currentlyReading = savedProgress.length;
    
    return {
        totalBooks,
        totalPages,
        monthBooks,
        currentlyReading
    };
}

function updateReadingStatsDisplay() {
    const stats = getReadingStats();
    const statsElement = document.getElementById('reading-stats');
    
    if (statsElement) {
        statsElement.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${stats.totalBooks}</div>
                    <div class="stat-label">Books Read</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.totalPages}</div>
                    <div class="stat-label">Pages Read</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.monthBooks}</div>
                    <div class="stat-label">This Month</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${stats.currentlyReading}</div>
                    <div class="stat-label">In Progress</div>
                </div>
            </div>
        `;
    }
}

window.Readify = {
    initMobileNav,
    initSmoothScrolling,
    initScrollAnimations,
    initTooltips,
    initBackToTop,
    getReadingStats,
    updateReadingStatsDisplay
};
// Enhanced Interactive Features for Philippines: Bayanihan in the Global Village
// Modern JavaScript with ES6+ features and accessibility

class WebsiteEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupBackToTop();
        this.setupReadingProgress();
        this.setupScrollAnimations();
        this.setupCardAnimations();
        this.setupModalSystem();
        this.setupInteractiveElements();
        this.setupStatisticsCounter();
        this.setupTimeline();
        this.setupKeyboardNavigation();
        this.setupPerformanceOptimizations();
    }

    // Theme Toggle Functionality
    setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        const html = document.documentElement;
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
            
            // Add subtle animation
            document.body.style.transition = 'background-color 0.3s ease';
            setTimeout(() => document.body.style.transition = '', 300);
        });
    }

    updateThemeIcon(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        themeToggle.innerHTML = theme === 'light' 
            ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm4.22 2.78a1 1 0 011.415 1.415l-.707.707a1 1 0 11-1.414-1.415l.706-.707zM21 11a1 1 0 110 2h-1a1 1 0 110-2h1zM6.343 6.343a1 1 0 011.415 0l.707.707A1 1 0 117.07 8.465l-.707-.707a1 1 0 010-1.415zM12 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm7.071-2.929a1 1 0 011.415 1.415l-.707.707a1 1 0 11-1.414-1.415l.706-.707zM5.636 17.072a1 1 0 010-1.415l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 110 2H3a1 1 0 110-2h1zm1.636-6.364a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0z"/></svg>'
            : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-10.45-10.45 1 1 0 00-1.19-1.09 10 10 0 00-12.21 0 1 1 0 00-1.19 1.09 8.05 8.05 0 01-10.45 10.45 1 1 0 00-.14 1.05 10 10 0 000 12.21 1 1 0 00.14 1.05 8.05 8.05 0 0110.45 10.45 1 1 0 001.19 1.09 10 10 0 0012.21 0 1 1 0 001.19-1.09 8.05 8.05 0 0110.45-10.45 1 1 0 00.14-1.05 10 10 0 000-12.21z"/></svg>';
    }

    // Back to Top Button
    setupBackToTop() {
        const backToTop = document.querySelector('.back-to-top');
        if (!backToTop) return;

        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        };

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    // Reading Progress Indicator
    setupReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            progressBar.style.width = Math.min(progress, 100) + '%';
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // Scroll Animations with Intersection Observer
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.card, .timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Card Hover Animations
    setupCardAnimations() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Modal System
    setupModalSystem() {
        // Create modal HTML
        const modalHTML = `
            <div id="infoModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2 id="modalTitle">Information</h2>
                    <div id="modalBody"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = document.getElementById('infoModal');
        const closeBtn = modal.querySelector('.close');
        
        // Close modal functionality
        closeBtn.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    openModal(title, content) {
        const modal = document.getElementById('infoModal');
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('infoModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Interactive Elements Setup
    setupInteractiveElements() {
        // Add click handlers for interactive elements
        const interactiveElements = document.querySelectorAll('.interactive-element');
        
        interactiveElements.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const title = element.getAttribute('data-title') || 'Information';
                const content = element.getAttribute('data-content') || 'Additional information.';
                this.openModal(title, content);
            });
        });

        // Add smooth hover effects
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                if (!card.querySelector('a')) { // Only if not a link
                    card.style.transform = 'scale(1.05)';
                    setTimeout(() => card.style.transform = 'scale(1)', 200);
                }
            });
        });
    }


    // Statistics Counter Animation
    setupStatisticsCounter() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            // Try data-count first, then data-target, then a default value
            let target = counter.getAttribute('data-count') || 
                        counter.getAttribute('data-target') || 
                        0;
            target = parseInt(target);
            
            // If still NaN, use a default value based on context
            if (isNaN(target)) {
                // Look at the text content to determine a reasonable default
                const text = counter.textContent.toLowerCase();
                if (text.includes('%')) target = 90;
                else if (text.includes('million')) target = 50;
                else if (text.includes('billion')) target = 30;
                else if (text.includes('island')) target = 7600;
                else if (text.includes('language')) target = 180;
                else target = 100; // default
            }
            
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current).toLocaleString();
            }, 16);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    // Timeline Enhancement
    setupTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.3 });
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });
    }

    // Keyboard Navigation Enhancement
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Navigate with arrow keys
            if (e.altKey) {
                switch(e.key) {
                    case 'ArrowUp':
                        e.preventDefault();
                        this.scrollToSection('home');
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        this.scrollToSection('profile');
                        break;
                }
            }
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy loading for images
        const images = document.querySelectorAll('img[src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Debounced scroll handler
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Additional scroll-based animations can go here
            }, 10);
        });
    }
}

// Cultural Facts Generator
class CulturalFacts {
    static facts = [
        {
            title: "The Bayanihan Spirit",
            content: "The word 'bayanihan' comes from 'bayan', meaning town or community. It refers to the Filipino tradition of communal unity and mutual aid, where neighbors help move a community to a new location by carrying the entire village on their shoulders."
        },
        {
            title: "Multilingual Nation",
            content: "The Philippines has over 180 languages and dialects, making it one of the most linguistically diverse countries in the world. Filipino (based on Tagalog) and English are the official languages."
        },
        {
            title: "Kundiman Heritage",
            content: "Kundiman is a traditional Filipino love song characterized by a melodic style that reflects deep emotion and poetic lyrics. These songs often express themes of love, longing, and patriotism."
        },
        {
            title: "Filipino Cuisine Fusion",
            content: "Filipino food is a unique blend of Malay, Spanish, Chinese, and American influences, creating distinctive dishes like adobo, sinigang, and lechon that represent the country's multicultural heritage."
        },
        {
            title: "Island Geography",
            content: "With over 7,600 islands, the Philippines is the world's second-largest archipelago. Only Indonesia has more islands, making the Philippines home to incredible cultural and ecological diversity."
        }
    ];

    static getRandomFact() {
        return this.facts[Math.floor(Math.random() * this.facts.length)];
    }

    static displayFact() {
        const fact = this.getRandomFact();
        const enhancer = new WebsiteEnhancer();
        enhancer.openModal(fact.title, `<p>${fact.content}</p>`);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the website enhancer
    window.websiteEnhancer = new WebsiteEnhancer();
    
    // Add cultural fact generator button if it doesn't exist
    if (!document.querySelector('.fact-generator')) {
        const factButton = document.createElement('button');
        factButton.className = 'fact-generator theme-toggle';
        factButton.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
        factButton.setAttribute('aria-label', 'Get random cultural fact');
        factButton.addEventListener('click', () => CulturalFacts.displayFact());
        document.body.appendChild(factButton);
    }
    
    // Add accessibility announcements
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.style.width = '1px';
    announcer.style.height = '1px';
    announcer.style.overflow = 'hidden';
    document.body.appendChild(announcer);
    
    // Announce page load
    setTimeout(() => {
        announcer.textContent = 'Philippines: Bayanihan in the Global Village website loaded successfully. Use Alt+Arrow keys for navigation.';
    }, 1000);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WebsiteEnhancer, CulturalFacts };
}

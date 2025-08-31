// scripts/dev-page.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
                entry.target.style.animation = 'fillBar 2s ease-in-out forwards';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Navigation mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Animation au scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observer les éléments à animer
    document.querySelectorAll('.project-card, .skill-category').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(item);
    });
    // Ajoute ce code à ton fichier dev-page.js
    // Animation typewriter
    function initTypewriter() {
        const texts = ["Développeur Fullstack", "Créatif Digital", "Étudiant Passionné"];
        const typewriterElement = document.querySelector('.typewriter');
        const cursorElement = document.querySelector('.typewriter-cursor');
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // Initialiser les animations quand la page est chargée
    document.addEventListener('DOMContentLoaded', function() {
        initTypewriter();
        
        // Animation d'apparition progressive
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    });
    // Gestion des erreurs de chargement d'images
    document.addEventListener('DOMContentLoaded', function() {
        const projectImages = document.querySelectorAll('.project-logo-img, .echoes-logo-img, .home-inspire-logo-img, .saldaetrip-logo-img');
        
        projectImages.forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                const container = this.closest('.logo-container') || this.closest('.project-image');
                container.classList.add('error');
                
                // Ajouter un fallback textuel
                const fallbackText = this.alt || 'Projet';
                if (!container.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-text';
                    fallback.textContent = fallbackText;
                    fallback.style.cssText = `
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 1.2rem;
                        font-weight: bold;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                        text-align: center;
                    `;
                    container.appendChild(fallback);
                }
            });
        });
    });
    
});
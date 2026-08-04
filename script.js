// ========================================
// ANIMATION AU SCROLL
// ========================================

// Configuration de l'observateur d'intersection
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Créer l'observateur pour les animations fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgba(130, 150, 151, 0.541)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

// Observer tous les éléments avec la classe fade-in
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// ========================================
// NAVBAR - EFFET DE SCROLL
// ========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// SMOOTH SCROLL POUR LES ANCRES
// ========================================

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

// ========================================
// PAGE MENU - ANIMATION DES ITEMS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuItems.length > 0) {
        const menuObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            menuObserver.observe(item);
        });
    }
});

// ========================================
// PAGE CONTACT - ANIMATION DES INFO-ITEMS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const infoItems = document.querySelectorAll('.info-item');
    
    if (infoItems.length > 0) {
        const infoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        infoItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            infoObserver.observe(item);
        });
    }
});

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de succès
            const btn = this.querySelector('.btn-gold');
            const originalText = btn.textContent;
            
            // État d'envoi
            btn.textContent = 'Envoi en cours...';
            btn.style.background = '#1E1E1E';
            btn.style.color = '#C9A24D';
            btn.disabled = true;
            
            // Simulation d'envoi
            setTimeout(() => {
                btn.textContent = '✓ Réservation Envoyée !';
                btn.style.background = '#2B8A3E';
                btn.style.color = 'white';
                
                // Retour à l'état normal
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '#C9A24D';
                    btn.style.color = '#1E1E1E';
                    btn.disabled = false;
                    this.reset();
                }, 3000);
            }, 1500);
        });
    }
});

// ========================================
// VALIDATION DU FORMULAIRE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = '#C9A24D';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value) {
                    this.style.borderColor = '#C9A24D';
                }
            });
        });
    });
});

// ========================================
// ANIMATION DE CHARGEMENT
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// NAVIGATION MOBILE - FERMETURE AUTO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navLinks && navbarToggler && navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarToggler.click();
                }
            });
        });
    }
});

// ========================================
// PARALLAX EFFET LÉGER SUR HERO
// ========================================

window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// COMPTEUR D'ANIMATION POUR LES CHIFFRES
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// GESTION DES IMAGES - LAZY LOADING
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ========================================
// BOUTON RETOUR EN HAUT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Créer le bouton
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #C9A24D;
        color: #1E1E1E;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Afficher/masquer selon le scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Effet hover
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.backgroundColor = '#1E1E1E';
        backToTop.style.color = '#C9A24D';
        backToTop.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.backgroundColor = '#C9A24D';
        backToTop.style.color = '#1E1E1E';
        backToTop.style.transform = 'scale(1)';
    });
    
    // Scroll vers le haut
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Video
const videos = [
    "videos/3135907-hd_1920_1080_25fps.mp4",
    "videos/13476220_1920_1080_25fps.mp4",
    "videos/12262839_1920_1080_24fps.mp4",
    "videos/5101165-hd_1920_1080_25fps.mp4",
];

let current = 0;

const btn_test = document.querySelector(".btn-test")
const video = document.querySelector(".hero-video");

video.src = videos[0];
video.play();

video.addEventListener("ended", () => {
    current++;

    if(current >= videos.length){
        current = 0;
    }

    video.src = videos[current];
    video.load();
    video.play();
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c La Table d\'Or ', 'background: #C9A24D; color: #1E1E1E; font-size: 20px; padding: 10px;');
console.log('%c Site développé avec ❤️ ', 'color: #C9A24D; font-size: 14px;');
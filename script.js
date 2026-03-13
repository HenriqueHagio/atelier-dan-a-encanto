// Menu Mobile Toggle
function bindMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');

    if (!menuToggle || !navMobile) return;
    if (menuToggle.dataset.bound === '1') return;

    menuToggle.dataset.bound = '1';

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMobile.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = navMobile.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', bindMobileMenu);
document.addEventListener('components:rendered', bindMobileMenu);

function bindStructureCarousel() {
    const carousel = document.querySelector('.structure-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    if (!track || !prevBtn || !nextBtn) return;
    if (carousel.dataset.bound === '1') return;

    carousel.dataset.bound = '1';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let autoplayId = null;
    const originalItems = Array.from(track.children);
    if (!originalItems.length) return;

    originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    let originalWidth = 0;
    const updateOriginalWidth = () => {
        originalWidth = track.scrollWidth / 2;
        if (originalWidth && track.scrollLeft === 0) {
            track.scrollLeft = originalWidth;
        }
    };
    updateOriginalWidth();

    const scrollByCard = (direction) => {
        const firstCard = track.querySelector('.gallery-item');
        if (!firstCard) return;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || 0);
        const cardWidth = firstCard.getBoundingClientRect().width;
        const distance = (cardWidth + gap) * direction;
        track.scrollBy({ left: distance, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    };

    let wrapTimeout = null;
    const wrapScroll = () => {
        if (!originalWidth) return;
        const maxLeft = originalWidth * 2;
        if (track.scrollLeft >= maxLeft - 2) {
            track.scrollLeft -= originalWidth;
        } else if (track.scrollLeft <= 2) {
            track.scrollLeft += originalWidth;
        }
    };

    track.addEventListener('scroll', () => {
        if (wrapTimeout) {
            clearTimeout(wrapTimeout);
        }
        wrapTimeout = setTimeout(wrapScroll, 140);
    });

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));

    const startAutoplay = () => {
        if (prefersReducedMotion) return;
        if (autoplayId) return;
        autoplayId = setInterval(() => scrollByCard(1), 4500);
    };

    const stopAutoplay = () => {
        if (!autoplayId) return;
        clearInterval(autoplayId);
        autoplayId = null;
    };

    startAutoplay();

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    window.addEventListener('resize', updateOriginalWidth);
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar efeito de scroll no header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (!header) return;
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer para animacoes ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function observeAnimatedElements() {
    document.querySelectorAll('.service-item, .info-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    observeAnimatedElements();
    bindStructureCarousel();
});

document.addEventListener('components:rendered', bindStructureCarousel);


import { bindMobileMenu } from './menu.js';
import { bindStructureCarousel } from './carousel.js';
import { bindSmoothScroll } from './smooth-scroll.js';
import { bindHeaderShadow } from './header-shadow.js';
import { bindScrollAnimations } from './scroll-animations.js';

/**
 * Entry point that wires all page behaviors.
 * @returns {void}
 */
const initPage = () => {
    bindMobileMenu();
    bindStructureCarousel();
    bindSmoothScroll();
    bindHeaderShadow();
    bindScrollAnimations();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

/**
 * Re-bind dynamic components injected after initial load.
 */
document.addEventListener('components:rendered', () => {
    bindMobileMenu();
    bindStructureCarousel();
});

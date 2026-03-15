import { $ } from './utils.js';

/**
 * Adds a subtle shadow to the header after scrolling.
 * @returns {void}
 */
export const bindHeaderShadow = () => {
    const header = $('.header');
    if (!header) return;

    const onScroll = () => {
        header.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 20px rgba(0, 0, 0, 0.15)'
            : '0 2px 10px rgba(0, 0, 0, 0.1)';
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
};

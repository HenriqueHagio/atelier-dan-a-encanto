import { $, $$, bindOnce } from './utils.js';

/**
 * Wire the mobile menu toggle and auto-close on link click.
 * @returns {void}
 */
export const bindMobileMenu = () => {
    const toggle = $('#menuToggle');
    const nav = $('#navMobile');
    if (!toggle || !nav) return;

    bindOnce(toggle, 'bound', () => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        });

        $$('#navMobile a').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    });
};

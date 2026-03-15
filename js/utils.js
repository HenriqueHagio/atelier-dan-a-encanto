/**
 * DOM helpers for concise, consistent queries.
 */
export const $ = (selector, root = document) => root.querySelector(selector);

/**
 * DOM helpers for concise, consistent queries.
 */
export const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

/**
 * Bind a handler only once per element using a data-* flag.
 * @param {HTMLElement} el
 * @param {string} key
 * @param {(el: HTMLElement) => void} fn
 * @returns {boolean}
 */
export const bindOnce = (el, key, fn) => {
    if (!el || el.dataset[key] === '1') return false;
    el.dataset[key] = '1';
    fn(el);
    return true;
};

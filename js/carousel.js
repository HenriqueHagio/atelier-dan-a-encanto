import { $, bindOnce } from './utils.js';

/**
 * Wire the horizontal carousel with seamless looping and autoplay.
 * Implementation based on the StackOverflow approach that moves the first
 * slide to the end after each transition to simulate an infinite carousel.
 * @returns {void}
 */
export const bindStructureCarousel = () => {
    const carousel = $('.structure-carousel');
    if (!carousel) return;

    const track = $('.carousel-track', carousel);
    const prevBtn = $('.carousel-btn.prev', carousel);
    const nextBtn = $('.carousel-btn.next', carousel);
    if (!track || !prevBtn || !nextBtn) return;

    bindOnce(carousel, 'bound', () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

        class InfiniteCarousel {
            constructor(trackEl, options) {
                this.track = trackEl;
                this.interval = options.interval;
                this.duration = options.duration;
                this.prefersReducedMotion = options.prefersReducedMotion;
                this.isPaused = false;
                this.isTransitioning = false;
                this.loopToken = 0;
                this.gap = this.getGap();
                this.handleResize = () => {
                    this.gap = this.getGap();
                };
            }

            getGap() {
                const styles = getComputedStyle(this.track);
                return parseFloat(styles.columnGap || styles.gap || 0);
            }

            getStepDistance(item) {
                return item.getBoundingClientRect().width + this.gap;
            }

            async moveNext() {
                if (this.isTransitioning) return;
                const first = this.track.firstElementChild;
                if (!first) return;

                this.isTransitioning = true;
                const distance = this.getStepDistance(first);

                if (this.prefersReducedMotion) {
                    this.track.appendChild(first);
                    this.isTransitioning = false;
                    return;
                }

                this.track.style.transition = `transform ${this.duration}ms ease`;
                this.track.style.transform = `translateX(${-distance}px)`;
                await delay(this.duration);

                this.track.appendChild(first);
                this.track.style.transition = 'none';
                this.track.style.transform = 'translateX(0px)';
                await nextFrame();
                this.isTransitioning = false;
            }

            async movePrev() {
                if (this.isTransitioning) return;
                const last = this.track.lastElementChild;
                if (!last) return;

                this.isTransitioning = true;
                const distance = this.getStepDistance(last);

                if (this.prefersReducedMotion) {
                    this.track.insertBefore(last, this.track.firstElementChild);
                    this.isTransitioning = false;
                    return;
                }

                this.track.insertBefore(last, this.track.firstElementChild);
                this.track.style.transition = 'none';
                this.track.style.transform = `translateX(${-distance}px)`;
                await nextFrame();

                this.track.style.transition = `transform ${this.duration}ms ease`;
                this.track.style.transform = 'translateX(0px)';
                await delay(this.duration);

                this.track.style.transition = 'none';
                this.isTransitioning = false;
            }

            start() {
                if (this.prefersReducedMotion) return;
                const token = ++this.loopToken;
                const run = async () => {
                    while (this.loopToken === token) {
                        if (!this.isPaused) {
                            await this.moveNext();
                        }
                        await delay(this.interval);
                    }
                };
                run();
            }

            pause() {
                this.isPaused = true;
            }

            resume() {
                this.isPaused = false;
            }
        }

        const carouselInstance = new InfiniteCarousel(track, {
            interval: 4500,
            duration: 500,
            prefersReducedMotion
        });

        window.addEventListener('resize', carouselInstance.handleResize);

        prevBtn.addEventListener('click', () => carouselInstance.movePrev());
        nextBtn.addEventListener('click', () => carouselInstance.moveNext());

        carousel.addEventListener('mouseenter', () => carouselInstance.pause());
        carousel.addEventListener('mouseleave', () => carouselInstance.resume());
        carousel.addEventListener('focusin', () => carouselInstance.pause());
        carousel.addEventListener('focusout', () => carouselInstance.resume());

        carouselInstance.start();
    });
};

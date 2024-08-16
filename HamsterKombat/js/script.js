const config = {

    debug: true,

    animationEnd: "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",

    transitionEnd: "transitionend webkitTransitionEnd oTransitionEnd",

    body: document.body,

    html: document.documentElement,

    header: document.querySelector('header'),

    getRandomInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    log: (...args) => {

        if (!config.debug)
            return false;

        console.log(...args);

    },

    URLToArray: url => {

        const request = {};
        const pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (let i = 0; i < pairs.length; i++) {
            if (!pairs[i])
                continue;
            const pair = pairs[i].split('=');
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return request;
    },

    ArrayToURL: array => {
        const pairs = [];
        for (const key in array)
            if (array.hasOwnProperty(key))
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(array[key]));

        return pairs.join('&');
    },

    numberWithSpaces: x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    delay: (fn, ms) => {
        let timer = 0;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(fn.bind(this, ...args), ms || 0);
        }
    },

    debounce: (func, wait) => {
        let timeout;
        return function(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    guidGenerator: () => {
        const S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },

    addListenerMulti: (element, eventNames, listener) => {
        const events = eventNames.split(' ');
        events.forEach(event => element.addEventListener(event, listener, false));
    },

    scrollbarWidth: () => {
        const documentWidth = parseInt(document.documentElement.clientWidth);
        const windowsWidth = parseInt(window.innerWidth);
        const scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }
};

let resizeTimer;
config.addListenerMulti(window, 'resize load', () => {
    const updatePaddingTop = () => {
        const headerHeight = config.header.offsetHeight;
        const root = document.querySelector(':root');
        root.style.setProperty('--padding-top', `${headerHeight}px`);
    };

    if (resizeTimer) {
        cancelAnimationFrame(resizeTimer);
    }

    resizeTimer = requestAnimationFrame(updatePaddingTop);
});

const menu = () => {
    const hamburger = document.querySelector('.hamburger');
    if (window.innerWidth > 580) {
        hamburger.classList.remove('is-active');
        config.body.classList.remove('is-open');
    } else {
        // Проверяем, добавлен ли уже обработчик
        if (!hamburger.classList.contains('js-click-handler')) {
            hamburger.classList.add('js-click-handler');
            hamburger.addEventListener('click', function () {
                this.classList.toggle('is-active');
                config.body.classList.toggle('is-open');
            });
        }
    }
}

const menuSticky = {
    resizeTimer: '',

    OldScrollPosition: 0,

    scrollState: () => {
        const header = document.querySelector('.header');

        const ScrollDown = menuSticky.OldScrollPosition < window.scrollY;

        menuSticky.OldScrollPosition = window.scrollY;

        const HEADER_TOP_HEIGHT = header.offsetHeight;

        if (window.scrollY > HEADER_TOP_HEIGHT) {

            const style = {
                'marginTop': `${-HEADER_TOP_HEIGHT - 40}px`,
            };

            if (!ScrollDown) {
                style['marginTop'] = '0';
            }
            setTimeout(function () {
                header.classList.add('is-sticky');
                Object.assign(header.style, style);
            }, 100);

        } else {

            if (!ScrollDown) {
                setTimeout(function () {
                    header.style.marginTop = '0';
                    header.classList.remove('is-sticky');
                }, 100);
            } else {
                setTimeout(function () {
                    header.removeAttribute('style');
                    header.classList.remove('is-sticky');
                }, 100);
            }
        }
    },

    init: () => {

        config.addListenerMulti(window, 'scroll load', config.debounce(function () {
            menuSticky.scrollState();
        }, 10));

        config.addListenerMulti(window, 'resize load', config.debounce(function () {
            menu();
        }, 200));
    }
};

menuSticky.init();
document.addEventListener('DOMContentLoaded', function () {
    function smoothScrollTo(target, duration = 1000) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll(".js-link").forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const aid = this.getAttribute("href");
            const target = document.querySelector(aid);

            if (target) {
                smoothScrollTo(target);
                history.pushState(null, null, aid);
            } else {
                console.error('Target element not found:', aid);
            }
        });
    });

    if (window.location.hash) {
        window.scrollTo(0, 0);

        setTimeout(function () {
            const target = document.querySelector(window.location.hash);
            if (target) {
                smoothScrollTo(target);
            }
        }, 100);
    }
});


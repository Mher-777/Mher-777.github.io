var config = {

	debug: true,

	animationEnd: "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",

	transitionEnd: "transitionend webkitTransitionEnd oTransitionEnd",

	body: $('body'),

	html: $('html'),

	header: $('header'),

	banner: $('.js-banner'),

	addListenerMulti: (element, eventNames, listener) => {
		const events = eventNames.split(' ');
		for (let i = 0, iLen = events.length; i < iLen; i++) {
			element.addEventListener(events[i], listener, false);
		}
	}
};

let resizeTimer;
config.addListenerMulti(window, 'resize load', function () {
    // document.body.classList.add("resize-animation-stopper");
    const headerHeight = config.header.outerHeight();
    const bannerHeight = config.banner.outerHeight();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // document.body.classList.remove("resize-animation-stopper");
        const root = document.querySelector(':root');
        root.style.setProperty('--padding-top', `${headerHeight + bannerHeight}px`);
    }, 1);
})

const menu = () => {
    if ($(window).width() > 580) {
        $('.hamburger').removeClass('is-active')
        $(config.body).removeClass('is-open')
    }
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active')
        $(this).closest('body').toggleClass('is-open')
    })
}

menu()

const countDown = () => {
    function initializeCountdown() {
        let countDownDate = localStorage.getItem('countDownDate');
        if (!countDownDate) {
            const now = new Date().getTime();
            const targetDate = new Date(now + 59 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 60 * 60 * 1000);
            countDownDate = targetDate.getTime();
            localStorage.setItem('countDownDate', countDownDate);
        }
        return parseInt(countDownDate, 10);
    }

    const countDownDate = initializeCountdown();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in elements with corresponding ids
        $(".js-days").text(days);
        $(".js-hours").text(hours);
        $(".js-minutes").text(minutes);

        if (distance < 0) {
            clearInterval(countdownFunction);
            console.log('Countdown Over')
            localStorage.removeItem('countDownDate');
        }
    }, 1000);
}

countDown()

const closeBanner = () => {
    const banner = $('.js-banner');
    const closeBtn = $('.js-close-banner');

    const storageKey = 'notificationDismissed';
    const expiryKey = 'notificationExpiry';
    const expiryDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // Check if notification is already dismissed
    function checkNotification() {
        const dismissed = localStorage.getItem(storageKey);
        const expiry = localStorage.getItem(expiryKey);

        if (dismissed && expiry && Date.now() < parseInt(expiry)) {
            banner.fadeOut();
        } else {
            banner.fadeIn();
        }
    }

    // Initial check and display the notification
    checkNotification();

    // Handle close button click
    closeBtn.on('click', function() {
        banner.fadeOut();
        localStorage.setItem(storageKey, 'true');
        localStorage.setItem(expiryKey, Date.now() + expiryDuration);
    });
}

closeBanner()
const menuScrollLink = () => {
    $('.js-link').on('click', function(event) {
        event.preventDefault();

        const target = $(this);

        $('.js-section').removeClass('is-active');
        $('.js-link').removeClass('is-active');

        $(target).addClass('is-active');
        $(this).addClass('is-active');

        $('html, body').animate({
            scrollTop: $(target.attr('href')).offset().top
        }, 1000);
    });

    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();

        $('.js-section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                var id = $(this).attr('id');

                $('.js-link').removeClass('active');
                $('.js-link[href="#' + id + '"]').addClass('active');
            }
        });
    });
}

menuScrollLink()

const slider = () => {
    const slider = document.querySelector('.js-slider');
    const sliderContent = document.querySelector('.investments__slider');
    const sliderItems = Array.from(sliderContent.children);

    // Дублируем контент для бесконечного эффекта
    sliderContent.append(...sliderItems.map(item => item.cloneNode(true)));

    let scrollAmount = 0;
    let requestId;

    function scrollSlider() {
        scrollAmount -= 2; // Скорость прокрутки
        if (Math.abs(scrollAmount) >= sliderContent.scrollWidth / 2) {
            scrollAmount = 0; // Сброс до начальной позиции
        }
        sliderContent.style.transform = `translateX(${scrollAmount}px)`;
        requestId = requestAnimationFrame(scrollSlider);
    }

    function startScroll() {
        requestId = requestAnimationFrame(scrollSlider);
    }

    function stopScroll() {
        cancelAnimationFrame(requestId);
    }

    slider.addEventListener('mouseenter', stopScroll);
    slider.addEventListener('mouseleave', startScroll);

    startScroll();
}

slider()


const modal = () => {
    $(".js-modal").on('click', function() {
        const modal = $(this).attr('href')
        $(modal).fadeIn();
    });

    $(".js-close-modal").on('click', function() {
        $(".modal").fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(".modal")) {
            $(".modal").fadeOut();
        }
    });
}

modal()
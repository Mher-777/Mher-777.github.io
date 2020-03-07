$(function () {
    $('.professional-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="professional-arrows arrows-right"></button>',
        nextArrow: '<button class="professional-arrows arrows-left"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.researches__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: '80px',
         responsive: [
            {
                breakpoint: 1510,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
            
        ]
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        dots: true,
        dotsClass: 'reviews-dots',
        vertical: true,
        verticalSwiping: true,
    });

    $('.menu-btn').on('click', function () {
        $('.header__menu').slideToggle()
    });

    new WOW().init();
})
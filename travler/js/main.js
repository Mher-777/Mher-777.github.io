$(function () {

    $('.traveling-slider').slick({
        arrows: false,
        autoplay: true,
    });

    $('.team__slider').slick({
        arrows: false,
        // autoplay: true,
        dots: true,
        dotsClass: 'team__slider-dots',
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            },
        ]
    });
    

    $('.main-info__item-btn').on('click', function () {
        $(".main-info__item:nth-child(1)").remove(),
            $(".main-info__item").removeClass('.main-info__item-remove')
    });

    $('.main-info__item-btn').on('click', function () {
        $(".main-info__item-remove").removeClass('main-info__item-remove')
    });

    $('.header__top-menu').on('click', function () {
        $('.main-menu').slideToggle();
        $('.header__top-search').toggleClass('active');
    })
    var wow = new WOW(
        {
            offset: 200,
        }
    );
    wow.init();
});
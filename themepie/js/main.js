$(function () {

  $('.main-screen__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'main-screen__dots',
    autoplay: true,
    rows: 0,
    pauseOnHover: false,
  });

  $('.portfolio__item-icon').on('click', function () {
    $(this).toggleClass('portfolio__item-icon--active')
  });

  $('.works__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="works__slider-arrow arrow-left icon-angle-double-left"></button>',
    nextArrow: '<button type="button" class="works__slider-arrow arrow-right icon-angle-double-right"></button>',
    responsive: [
      {
        breakpoint: 801,
        settings: "unslick"
      }
    ]
  })

  $('.team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    rows: 0,
    adaptiveHeight: true,
    initialSlide: 1,
    prevArrow: '<button type="button" class="team__slider-arrow arrow-left icon-angle-double-left"></button>',
    nextArrow: '<button type="button" class="team__slider-arrow arrow-right icon-angle-double-right"></button>',
    centerPadding: 0,
    asNavFor: '.team__statistics-slider',
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          arrows: false
        }
      }
    ]
  })

  $('.team__statistics-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.team__slider',
    fade: true,
    initialSlide: 1,
    draggable: false,
    speed: 500,

  })

  let offsetTop = $(".team").offset().top;
  $(window).scroll(function () {
    let height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $('.team__progress-bar').each(function () {
        $(this).find('.progress-content').animate({
          width: $(this).attr('data-percentage')
        }, 2000);

        $(this).find('.progress-number-mark').animate({
          left: $(this).attr('data-percentage')
        }, {
          duration: 2000,
          step: function (now, fx) {
            let data = Math.round(now);
            $(this).find('.percent').html(data + '%');
          }
        });
      })
    }
  });

  $('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    prevArrow: '<button type="button" class="reviews__slider-arrow arrow-left icon-angle-double-left"></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrow arrow-right icon-angle-double-right"></button>',
    asNavFor: '.reviews__bottom',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        }
      }
    ]
  })
  $('.reviews__bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    speed: 500,
    asNavFor: '.reviews__slider',
    fade: true,
  })

  $('.update-social__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'update-social__dot',
    appendDots: '.update-social__dots',
    rows: 0,
  })

  $('.main__hamburger').on('click', function () {
    $(this).toggleClass('main__hamburger--open');
    $('.header__menu').slideToggle();
  });

  $(window).height();
  let e = $(".header").offset().top,
    t = $(window).height(),
    o = $("body").height() + t,
    s = e - 0 * t;
  $(window).on("scroll", function (e) {
    let t = window.pageYOffset,
      n = t > s;
    n || o <= t && !n ? $(".header").addClass("header--sticky") : $(".header").removeClass("header--sticky")
  });

  wow = new WOW(
    {
      boxClass: 'wow',      
      animateClass: 'animated', 
      offset: 0,          
      mobile: true,
      live: true        
    }
  )
  wow.init();

  var mixer = mixitup('.portfolio__items', {
    "animation": {
      "duration": 700,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade rotateX(90deg)"
    }
  })

})
"use strict";

function canUseWebp() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  return false;
}

window.onload = function () {
  var images = document.querySelectorAll('[data-bg]');

  for (var i = 0; i < images.length; i++) {
    var image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  }

  var isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  if (canUseWebp() || firefoxVer >= 65) {
    var imagesWebp = document.querySelectorAll('[data-bg-webp]');

    for (var _i = 0; _i < imagesWebp.length; _i++) {
      var imageWebp = imagesWebp[_i].getAttribute('data-bg-webp');

      imagesWebp[_i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
};

$(function () {
  var body = $('body');
  svg4everybody({});
  new CircleType(document.querySelector('.down__text'));

  var parallaxEffect = function parallaxEffect() {
    $('.parallax').on('mousemove', function (e) {
      var x = e.pageX / $(window).width();
      var y = e.pageY / $(window).height();
      $(this).find('.intro__bg').css('transform', 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)');
    });
  };

  parallaxEffect();

  var menu = function menu() {
    var menu = $('.menu');
    var button = $('.hamburger');
    var header = $('.header');
    button.on('click', function () {
      $(this).toggleClass('is-active');
      $('.content').toggleClass('open');
      menu.toggleClass('open');

      if ($(this).hasClass('is-active')) {
        body.addClass('hidden');
        header.addClass('active');
      } else {
        body.removeClass('hidden');
        header.removeClass('active');
      }
    });
    $(window).resize(function () {
      var w = $(window).width();

      if (w > 830) {
        $('.content').removeClass('open');
        menu.removeAttr('style');
        menu.removeClass('open');
        button.removeClass('is-active');
        body.removeClass('hidden');
        header.removeClass('active');
      }
    });
  };

  menu();

  var advantagesSlider = function advantagesSlider() {
    $('.advantages__slider').slick({
      slidesToShow: 4,
      slideToScroll: 1,
      arrows: true,
      infinite: false,
      appendArrows: '.advantages__arrows',
      prevArrow: "<button class=\"arrow arrow--left\" type=\"button\">\n                <svg class=\"icon icon-arrow-left arrow-icon\">\n                  <use xlink:href=\"static/images/sprite/symbol/sprite.svg#arrow-left\"></use>\n                </svg>\n              </button>",
      nextArrow: "<button class=\"arrow arrow--right\" type=\"button\">\n                <svg class=\"icon icon-arrow-right arrow-icon\">\n                  <use xlink:href=\"static/images/sprite/symbol/sprite.svg#arrow-right\"></use>\n                </svg>\n              </button>",
      responsive: [{
        breakpoint: 1251,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          infinite: true,
          variableWidth: true
        }
      }]
    });
  };

  advantagesSlider();

  var slideToElement = function slideToElement() {
    $('.js-btn-slide').on('click', function (e) {
      e.preventDefault();
      var attr = $(this).attr('data-elem');
      $("html, body").animate({
        scrollTop: $(attr).offset().top
      }, 1500);
    });
  };

  slideToElement();

  var headerSticky = function headerSticky() {
    var scrollPrev = 0;
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;

      if (scrolled >= 100 && scrolled > scrollPrev) {
        header.style.top = -header.offsetHeight + 'px';
      } else if (scrolled === 0) {
        header.classList.remove('sticky');
        header.style.top = 0;
      } else {
        header.style.top = 0;
        header.classList.add('sticky');
      }

      scrollPrev = scrolled;
    });
  };

  headerSticky();
});
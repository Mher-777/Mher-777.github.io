"use strict";

var swiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  initialSlide: 2,
  pagination: {
    el: '.partners__pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: '.partners__arrow--left',
        prevEl: '.partners__arrow--right'
      },
      pagination: false
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 160,
      pagination: false,
      loop: true,
      navigation: {
        nextEl: '.partners__arrow--left',
        prevEl: '.partners__arrow--right'
      }
    }
  }
});
$(function () {
  var headerMenu = function headerMenu() {
    var hambureger = $('.hamburger');
    var menu = $('.header__menu');
    hambureger.on('click', function () {
      menu.slideToggle();
      $(this).toggleClass('is-active');
    });
    $(window).resize(function () {
      var w = $(window).width();

      if (w > 1080) {
        menu.removeAttr('style');
        hambureger.removeClass('is-active');
      }
    });
  };

  headerMenu();

  var headerSticky = function headerSticky() {
    var $header = $(".header");
    var h = $header.height() + 15;
    var appScroll = appScrollForward;
    var appScrollPosition = 0;
    var scheduledAnimationFrame = false;

    function appScrollReverse() {
      scheduledAnimationFrame = false;
      if (appScrollPosition > h) return;
      $header.removeClass("header--sticky");
      appScroll = appScrollForward;
    }

    function appScrollForward() {
      scheduledAnimationFrame = false;
      if (appScrollPosition < h) return;
      $header.addClass("header--sticky");
      appScroll = appScrollReverse;
    }

    function appScrollHandler() {
      appScrollPosition = window.pageYOffset;
      if (scheduledAnimationFrame) return;
      scheduledAnimationFrame = true;
      requestAnimationFrame(appScroll);
    }

    $(window).scroll(appScrollHandler);
  };

  headerSticky();
  $('.js-accordion__toggle').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.removeClass('active');
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('li .c-accordion__title').removeClass('active');
      $this.parent().parent().find('li .c-accordion__content').removeClass('show');
      $this.parent().parent().find('li .c-accordion__content').slideUp(350);
      $this.toggleClass('active');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  });
});
var player = videojs('video');
var wow = new WOW({
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true
});
wow.init();

var select = function select() {
  var selectCurrent = document.querySelectorAll('.select__header'),
      selectItem = document.querySelectorAll('.select__item');
  selectCurrent.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.parentElement.classList.toggle('is-open');
    });
  });
  selectItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
      e.currentTarget.closest('.select').classList.remove('is-open');
    });
  });
};

select();
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

function calcScroll() {
  var div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

$(function () {
  var header = function header() {
    var menu = $('.header__bottom');
    var body = $('body');
    var btn = $('.hamburger');
    var headerSearch = $('.header__search');
    var searchBtn = $('.header__search-btn');
    var searchInput = $('.header__search-input');
    btn.on('click', function () {
      $(this).toggleClass('is-active');
      body.toggleClass('hidden');
      menu.slideToggle();
      headerSearch.toggleClass('header__search--close');
      searchInput.hide();
    });

    function responsiveSearch() {
      var w = $(window).width();

      if (w <= 650) {
        searchInput.removeAttr('style');
        searchBtn.addClass('js-open');
      } else {
        searchBtn.removeClass('js-open');
      }
    }

    responsiveSearch();
    searchBtn.on('click', function (e) {
      if (searchBtn.hasClass('js-open')) {
        e.preventDefault();
        searchInput.slideToggle();
      }
    });

    function responsiveMenu() {
      var w = $(window).width();

      if (w >= 650) {
        btn.removeClass('open');
        menu.removeAttr('style');
        body.removeClass('hidden');
        headerSearch.removeClass('header__search--close');
      }
    }

    responsiveMenu();
    $(window).resize(function (e) {
      responsiveMenu();
      responsiveSearch();
    });
  };

  header();

  var lawyerSlider = function lawyerSlider() {
    $('.lawyer__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      touchThreshold: 40,
      nextArrow: '<button class="arrow arrow--left"><svg class="icon icon-arrow icon-arrow--s-small icon-arrow--color-orange"><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use></svg></button>',
      prevArrow: '<button class="arrow arrow--right"><svg class="icon icon-arrow icon-arrow--s-small icon-arrow--color-orange"><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use></svg></button>',
      responsive: [{
        breakpoint: 1121,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 901,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          appendArrows: '.lawyer__arrows--mobile'
        }
      }]
    });
  };

  lawyerSlider();

  var scrollCounter = function scrollCounter() {
    var counted = 0;
    var section = $('.statistics');
    if (section.length > 0) $(window).scroll(function () {
      var oTop = section.offset().top - window.innerHeight;

      if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.statistics__item-number').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-number');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'swing',
            step: function step() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function complete() {
              $this.text(this.countNum);
            }
          });
        });
        counted = 1;
      }
    });
  };

  scrollCounter();

  var advantagesSlider = function advantagesSlider() {
    var advantagesSlider = $('.advantages__slider');
    advantagesSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      touchThreshold: 40,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      pauseOnHover: false,
      prevArrow: '',
      nextArrow: '<button class="advantages__slider-arrow arrow arrow--right"><svg class="icon icon-arrow icon-arrow--s-small icon-arrow--color-green"><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-down"></use></svg></button>',
      responsive: [{
        breakpoint: 551,
        settings: {
          swipe: false
        }
      }]
    });

    if (advantagesSlider.length > 0) {
      $(window).bind('resize', function (e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
          // this.location.reload(false);
          advantagesSlider.slick('refresh');
        }, 200);
      });
    }
  };

  advantagesSlider();

  var reviewsSlider = function reviewsSlider() {
    $('.reviews__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      appendArrows: '.reviews__arrows',
      touchThreshold: 40,
      nextArrow: '<button class="section-arrow section-arrow--bg-green section-arrow--next"><svg class="icon icon-arrow "><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use></svg></button>',
      prevArrow: '<button class="section-arrow section-arrow--bg-green section-arrow--prev"><svg class="icon icon-arrow "><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use></svg></button>',
      responsive: [{
        breakpoint: 793,
        settings: {
          rows: 2,
          slidesToShow: 1,
          fade: true
        }
      }]
    });
  };

  reviewsSlider();

  var popup = function popup() {
    var header = $('.header__bottom');
    var dataFancybox = $('[data-fancybox]');
    dataFancybox.fancybox({
      keyboard: true,
      image: {
        preload: true
      },
      infobar: false,
      clickContent: function clickContent(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      onInit: function onInit() {
        header.css('transform', 'translateX(' + -calcScroll() / 2 + 'px)');
      },
      afterClose: function afterClose() {
        header.css('transform', '');
      }
    });
    $.fancybox.defaults.animationEffect = "circular";
    $.fancybox.defaults.animationDuration = 500;
  };

  popup();

  var formTabs = function formTabs() {
    var elem = $('.form__item');
    elem.on('click', function () {
      if (elem.hasClass('form__item--active')) {
        elem.removeClass('form__item--active');
      }

      $(this).toggleClass('form__item--active');
    });
  };

  formTabs();

  var customSelect = function customSelect() {
    $('.select').select2({
      minimumResultsForSearch: -1,
      width: null
    }).on('select2:open', function (e) {
      $('.select2-results__options').scrollbar().parent().addClass('scrollbar-inner');
    });
  };

  customSelect();

  var fileUpload = function fileUpload() {
    $(".file-upload input[type=file]").change(function () {
      var filename = $(this).val().replace(/.*\\/, "");
      $(this).closest('.file-upload').find('.file-upload__text').html(filename);
    });
  };

  fileUpload();

  var radioDisabled = function radioDisabled() {
    var input = $('.form__info-input');
    var radio = $('.form__info-radio').find('input');
    radio.on('change', function () {
      if ($(this).attr('id') === 'pay') {
        input.removeAttr('disabled');
        input.select();
      } else {
        input.attr('disabled', 'disabled');
      }
    });
  };

  radioDisabled();
});
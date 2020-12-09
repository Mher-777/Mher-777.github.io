"use strict";function canUseWebp(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0==t.toDataURL("image/webp").indexOf("data:image/webp")}window.onload=function(){for(var t=document.querySelectorAll("[data-bg]"),e=0;e<t.length;e++){var s=t[e].getAttribute("data-bg");t[e].style.backgroundImage="url("+s+")"}var o=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),o=o?parseInt(o[1]):0;if(canUseWebp()||65<=o)for(var r=document.querySelectorAll("[data-bg-webp]"),a=0;a<r.length;a++){var i=r[a].getAttribute("data-bg-webp");r[a].style.backgroundImage="url("+i+")"}},$(function(){svg4everybody({});var t,e;function s(){1e3<=$(window).width()&&(t.removeClass("is-active"),e.removeAttr("style"))}t=$(".hamburger"),e=$(".menu"),t.on("click",function(){$(this).toggleClass("is-active"),e.slideToggle()}),s(),$(window).resize(function(t){s()});$(".products__slider").slick({slidesToShow:3,slidesToScroll:1,touchThreshold:40,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!1,sped:2e3,prevArrow:'<button type="button" class="arrow arrow--left"><svg class="icon icon-arrow-left ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use>\n                  </svg></button>',nextArrow:'<button type="button" class="arrow arrow--right"><svg class="icon icon-arrow-right ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use>\n                  </svg></button>',responsive:[{breakpoint:1151,settings:{slidesToShow:2}},{breakpoint:601,settings:{slidesToShow:1,adaptiveHeight:!0,autoplay:!1}}]});$(".counter__btn").each(function(){var o=$(this);o.on("click",function(t){var e,s;t.preventDefault(),"plus"===$(this).attr("data-direction")?(e=o.prev(),s=o.prev().val(),e.val(+s+1)):(e=o.next(),(s=o.next().val())-1&&e.val(+s-1))})}),$("select").customSelectBox({selectboxClass:"select",buttonClass:"current",arrow:'<svg class="icon icon-arrow-down ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-down"></use>\n                  </svg>'});$(".documents__slider").slick({slidesToShow:1,slidesToScroll:1,fade:!0,adaptiveHeight:!0,prevArrow:'<button type="button" class="arrow arrow--hexagon arrow--left"><svg class="icon icon-arrow-left ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--left"></use>\n                  </svg></button>',nextArrow:'<button type="button" class="arrow arrow--hexagon arrow--right"><svg class="icon icon-arrow-right ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--right"></use>\n                  </svg></button>',responsive:[{breakpoint:871,settings:{appendArrows:".documents__arrows"}}]});$(".reviews__slider").slick({slidesToShow:3,slidesToScroll:1,touchThreshold:40,autoplay:!0,autoplaySpeed:1500,sped:2e3,prevArrow:'<button type="button" class="arrow arrow--left"><svg class="icon icon-arrow-left ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use>\n                  </svg></button>',nextArrow:'<button type="button" class="arrow arrow--right"><svg class="icon icon-arrow-right ">\n                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use>\n                  </svg></button>',responsive:[{breakpoint:1151,settings:{slidesToShow:2}},{breakpoint:601,settings:{slidesToShow:1,adaptiveHeight:!0,autoplay:!1}}]});$(".js-dropdown").on("click",function(t){t.preventDefault(),$(this).toggleClass("active").next().slideToggle()});var o;(o=$(".js-btn")).on("click",function(t){t.preventDefault();var e=$(this),s=e.attr("data-control"),t=$(".catalogs__row");"list"===s?(t.removeClass("grid"),t.addClass("list"),t.find(".catalog").removeClass("grid"),t.find(".catalog").addClass("list")):(t.removeClass("list"),t.addClass("grid"),t.find(".catalog").removeClass("list"),t.find(".catalog").addClass("grid")),o.removeClass("active"),e.addClass("active")});$(".js-input-slider").ionRangeSlider({skin:"square"}),$(".group-input").on("input",function(){console.log(),0<$(this).val().length?$(this).addClass("group-input--no-empty"):$(this).removeClass("group-input--no-empty")});$(".js-stars").rateYo({normalFill:"transparent",spacing:"3px",ratedFill:"#b87e28",starSvg:'\n                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15">\n                    <g>\n                        <g>\n                            <path stroke="#b87e28" d="M13.94 5.553c0-.252-.269-.352-.47-.386l-4.205-.611L7.38.744C7.305.585 7.162.401 6.97.401c-.193 0-.335.184-.41.343L4.673 4.556.47 5.167c-.21.034-.47.134-.47.386 0 .15.11.293.21.402L3.26 8.92l-.72 4.189c-.01.058-.018.109-.018.167 0 .218.11.42.352.42a.708.708 0 0 0 .335-.101l3.762-1.977 3.761 1.977c.1.058.218.1.335.1.243 0 .344-.2.344-.419 0-.058 0-.109-.009-.167l-.72-4.189 3.04-2.965c.11-.109.218-.251.218-.402z"/>\n                        </g>\n                    </g>\n                </svg>\n            '});var r,a;r=$(".product-vertical__slider"),a=$(".product-horizontal__slider"),r.slick({slidesToShow:3,slidesToScroll:1,focusOnSelect:!0,vertical:!0,arrows:!1,asNavFor:".product-horizontal__slider"}),a.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".product-vertical__slider"});var i;i=$("[data-fancybox]"),$(".js-popup").on("click",function(t){t.preventDefault();t=$(this).attr("data-src");$.fancybox.open({src:t})}),i.fancybox({keyboard:!0,image:{preload:!0},infobar:!1,clickContent:function(t){return"image"===t.type&&"zoom"},lang:"ru"}),$.fancybox.defaults.animationEffect="circular",$.fancybox.defaults.animationDuration=500;$(".file-upload input[type=file]").change(function(){var t=$(this).val().replace(/.*\\/,"");$(this).closest(".file-upload").find(".file-upload__text").html(t)})});var headerSticky=function(){var e=0,s=document.querySelector(".header");window.addEventListener("scroll",function(){var t=window.scrollY;150<=t&&e<t?s.style.top=-s.offsetHeight-50+"px":(s.classList.remove("header--sticky"),s.style.top=0),e=t})};headerSticky();
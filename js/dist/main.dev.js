"use strict";

$(function () {
  $('.top__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next" class="slick-arrow"><img src="/images/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev" class="slick-arrow"><img src="/images/prev.svg" alt=""></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {}
    }, {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }]
  });
});
'use strict';

(function () {

  var jsTriggers = document.querySelectorAll('.tabs__trigger');

  var activateTabsContent = function (i) {
    return function () {
      var id = jsTriggers[i].getAttribute('data-tab');
      var content = document.querySelector('.membership[data-tab="' + id + '"]');
      var activeTrigger = document.querySelector('.tabs__trigger.active');
      var activeContent = document.querySelector('.membership.active');

      activeTrigger.classList.remove('active');
      jsTriggers[i].classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    };
  };

  for (var i = 0; i < jsTriggers.length; i++) {
    jsTriggers[i].addEventListener('click', activateTabsContent(i));
  }
})();

/* eslint-disable */
(function () {
    var swiperTrainers = new Swiper('.swiper-container-s1', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
    },
    navigation: {
      nextEl: '.trainers-slider__control--next',
      prevEl: '.trainers-slider__control--prev',
    },
  });
})();

(function () {
  var swiperReviews = new Swiper('.swiper-container-s2', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews-slider__control--next',
    prevEl: '.reviews-slider__control--prev',
  },
});
})();
/* eslint-enable */

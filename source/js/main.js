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


(function () {
  var reviewsSlider = document.querySelector('.reviews__slider');
  var slidePrev = document.querySelector('.reviews-slider__control--prev');
  var slideNext = document.querySelector('.reviews-slider__control--next');
  var slideImg = reviewsSlider.querySelectorAll('.reviews-slider__item');
  var slideIndex = 0;

  slideNext.addEventListener('click', function () {
    slidePrev.style.display = 'block';
    slideImg[slideIndex].classList.remove('visible');
    slideImg[++slideIndex].classList.add('visible');
    if (slideIndex === slideImg.length - 1) {
      slideNext.style.display = 'none';
    }
  });

  slidePrev.addEventListener('click', function () {
    slideNext.style.display = 'block';
    slideImg[slideIndex].classList.remove('visible');
    slideImg[--slideIndex].classList.add('visible');
    if (slideIndex === 0) {
      slidePrev.style.display = 'none';
    }
  });
})();

/* eslint-disable */
(function () {
    var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.trainers-slider__control--next',
      prevEl: '.trainers-slider__control--prev',
    },
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
    }
  });
})();
/* eslint-enable */

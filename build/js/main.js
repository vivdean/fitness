'use strict';

var jsTriggers = document.querySelectorAll('.tabs__trigger');

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = trigger.getAttribute('data-tab');
    var content = document.querySelector('.membership[data-tab="' + id + '"]');
    var activeTrigger = document.querySelector('.tabs__trigger.active');
    var activeContent = document.querySelector('.membership.active');

    activeTrigger.classList.remove('active');
    trigger.classList.add('active');

    activeContent.classList.remove('active');
    content.classList.add('active');
  });
});

var carousel = document.querySelector('.trainers-slider');
var list = carousel.querySelector('.trainers-slider__list');
var listElems = carousel.querySelectorAll('.trainers-slider__item');
var prevBtn = carousel.querySelector('.trainers-slider__control-prev');
var nextBtn = carousel.querySelector('.trainers-slider__control-next');
var position = 0;

var slideParameters = {
  'desktop': {
    width: 300,
    count: 4,
  },
  'tablet': {
    width: 308,
    count: 2,
  },
  'mobile': {
    width: 268,
    count: 1,
  }
};

prevBtn.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    moveSliderPrev(slideParameters.mobile.width, slideParameters.mobile.count);
  } else if (window.matchMedia('(max-width: 1199px)').matches) {
    moveSliderPrev(slideParameters.tablet.width, slideParameters.tablet.count);
  } else {
    moveSliderPrev(slideParameters.desktop.width, slideParameters.desktop.count);
  }
});

nextBtn.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    moveSliderNext(slideParameters.mobile.width, slideParameters.mobile.count);
  } else if (window.matchMedia('(max-width: 1199px)').matches) {
    moveSliderNext(slideParameters.tablet.width, slideParameters.tablet.count);
  } else {
    moveSliderNext(slideParameters.desktop.width, slideParameters.desktop.count);
  }
});

var moveSliderNext = function (width, count) {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

var moveSliderPrev = function (width, count) {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

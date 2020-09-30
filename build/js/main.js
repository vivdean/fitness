'use strict';

var jsTriggers = document.querySelectorAll('.tabs__trigger');
//  var jsContents = document.querySelectorAll('.tabs__membership');

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = trigger.getAttribute('data-tab');
    console.log(id);
    var content = document.querySelector('.membership[data-tab="' + id + '"]');
    var activeTrigger = document.querySelector('.tabs__trigger.active');
    var activeContent = document.querySelector('.membership.active');

    activeTrigger.classList.remove('active');
    trigger.classList.add('active');

    activeContent.classList.remove('active');
    content.classList.add('active');
  });
});

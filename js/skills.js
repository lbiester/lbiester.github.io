$(document).ready(function () {
  $('div.skills-row div.skill-info').mouseenter(function() {
    $(this).find('img').removeClass('grayscale');
  });
  $('div.skills-row div.skill-info').mouseleave(function () {
    $(this).find('img').addClass('grayscale');
  });
});

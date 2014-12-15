var colorFadedIn = false;
$(document).ready(function () {
  $('div.skills-row div.skill-info').mouseenter(function() {
    if ($(window).width() > 768) {
      $(this).find('img').removeClass('grayscale');
    }
  });
  $('div.skills-row div.skill-info').mouseleave(function () {
    if ($(window).width() > 768) {
      $(this).find('img').addClass('grayscale');
    }
  });
});

function fadeInColor() {
  $('div.skill-info img').each(function() {
    $(this).removeClass('grayscale');
  });
  colorFadedIn = true;
}

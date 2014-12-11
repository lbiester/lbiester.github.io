$(document).ready(function() {
	$(window).scroll(function() {
			if (window.pageYOffset < $('div#about').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#home-link').addClass('selected');
			} else if (window.pageYOffset < $('div#contact').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#about-link').addClass('selected');
			} else {
				$('a.selected').removeClass('selected');
				$('a#contact-link').addClass('selected');
			}

	});
	$('a#home-link').click(function() {
		$('body').animate({scrollTop: $('div#home').offset().top}, '500');
	});
	$('a#about-link').click(function() {
		$('body').animate({scrollTop: $('div#about').offset().top}, '500');
	});
	$('a#resume-link').click(function() {
		$('body').animate({scrollTop: $('div#resume').offset().top}, '500');
	});
	$('a#contact-link').click(function() {
		$('body').animate({scrollTop: $('div#contact').offset().top}, '500');
	});
});

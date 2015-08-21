$(document).ready(function() {
	$('.navbar-nav').find('a').click(function(event) {
		var elementClicked = $(this).attr('href');
		var dataGo = $(elementClicked);


		$('#navbar').removeClass('in');

		$('body').stop().animate({
			scrollTop: dataGo.offset().top - 105
		}, 500);


		event.preventDefault();
	});
});
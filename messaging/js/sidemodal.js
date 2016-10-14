$(document).ready(function(){
	$('.icon-sidemodal').on('click', function() {
		$('body').css('overflow-y', 'hidden');
		$('.sidemodal__bg').fadeIn();
		$('#sidemodal').animate({right: 0}, 300);
	});

	$('.back-btn, .sidemodal__bg').on('click', function() {
		$('body').css('overflow-y', 'auto');
		$('#sidemodal').animate({right: '-480px'}, 300);
		$('.sidemodal__bg').fadeOut();
	});

});
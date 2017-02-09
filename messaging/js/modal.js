$(document).ready(function(){
	// Opens Modal
	$('.modal-trigger').on('click', function() {
		$('.modal').show();
		setTimeout(function(){
			$('.modal').animate({opacity: 1});
		}, 150);
	//Hides other modals contents for safety
		$('.modal__body').hide();
	// Shows different types of content on modal
		//How to format files
		if ($(this).hasClass('trigger--how-to-do')) {
			$('.modal--how-to-do').show();
		} else if ($(this).hasClass('trigger--flash-sms')) {
			$('.modal--flash-sms').show();
		}
	});

	// Closes modal
	$('.close-modal, .modal').on('click', function(closesModal) {
		if (!$(closesModal.target).not('.close-modal').closest('.modal__body').length) {
			$('.modal').animate({opacity: 0}, 15);
			setTimeout(function(){
				$('.modal').fadeOut();
			}, 400);
		}
	});

});
$(document).ready(function(){
	// Opens Modal
	$('.modal-trigger, .input--delete').on('click', function() {
		$('body').css('overflow-y', 'hidden');
		$('.modal').show();
		$('.modal').animate({opacity: 1}, 100);
	//Hides other modals contents for safety
		$('.modal__body').hide();
	// Shows different types of content on modal
		//How to format files
		if ($(this).hasClass('trigger--how-to-do')) {
			$('.modal--how-to-do').show();
		// What is Flash SMS
		} else if ($(this).hasClass('trigger--flash-sms')) {
			$('.modal--flash-sms').show();
		// Confirm user deletion
		} else {
			$('.modal--delete').show();
		}

	});

	// Closes modal
	$('.close-modal, .modal').on('click', function(closesModal) {
		// $('.deletable').removeClass("deletable");
		if (!$(closesModal.target).not('.close-modal, .input--yes-delete').closest('.modal__body').length) {
			$('.modal').animate({opacity: 0}, 15);
			setTimeout(function(){
				$('.modal').fadeOut();
			}, 400);
			$('body').css('overflow-y', 'auto');
		}
	});

});
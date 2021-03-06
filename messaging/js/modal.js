$(document).ready(function(){
	// Opens Modal
	$('.modal-trigger, .input--delete').on('click', function() {
		$('.modal').toggleClass('modal--active').show();
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

	$('body').scroll(function () {
		$('.modal--active').css('position', 'fixed');
	});



	// // Closes modal
	// $('.close-modal, .modal').on('click', function(closesModal) {
	// 	// $('.deletable').removeClass("deletable");
	// 	if (!$(closesModal.target).not('.close-modal, .input--yes-delete').closest('.modal__body').length) {
	// 		$('.modal').animate({opacity: 0}, 15);
	// 		setTimeout(function(){
	// 			$('.modal').fadeOut();
	// 		}, 400);
	// 		$('body').css('overflow-y', 'auto');
	// 	}
	// });

	// Confirm deletions
	$('.input--yes-delete').on('click', function(){
		closeModal();
		setTimeout(function(){
			$('.deletable').slideUp();
			setTimeout(function(){
				$('.deletable').remove();
			}, 400);
		}, 400);
	});

	// Closes modal
	$('.close-modal, .modal-bg').on('click', function(closesModal) {
		var target = $( closesModal.target );
		if ( target.is('.close-modal, .modal-bg') ) {
			$('.deletable').removeClass('deletable');
			closeModal();
		}
	});

});

function closeModal() {
	$('.modal').animate({opacity: 0}, 15);
	setTimeout(function(){
		$('.modal').fadeOut();
	}, 400);
	$('body').css('overflow-y', 'auto');
}
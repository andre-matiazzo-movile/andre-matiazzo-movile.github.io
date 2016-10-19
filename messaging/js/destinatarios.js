$(document).ready(function() {
	//Remove labels with Groups and Contacts names
	$('.icon-close-blue').on('click', function () {
		var labelCounter = $(this).parents('.labels__container').find('.checkout__label:visible').length;
		$(this).parent().fadeOut();
		if (labelCounter == 1) {
			$(this).parents('.recipients__checkout').fadeOut();
		}
		if ($('.second-column').find('.recipients__checkout:visible').length == 1 &&
			$('.second-column').find('.checkout__label:visible').length == 1){
			setTimeout(function(){
				$('.second-column').fadeOut();
			}, 200);
	}
});
});
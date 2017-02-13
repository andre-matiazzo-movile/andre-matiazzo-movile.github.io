
$(document).ready(function() {
	//Edit created inputs
	$('.input--edit, .input--cancel').on('click', function () {
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
 	});
	//Cancel edition on inputs
	$('.input--cancel').on('click', function() {
		$(this).parents('.inputs-infos').find('input').each(function () {
			$(this).val( $(this).siblings('p.input--disabled').text() );
		});
	});
	//Save edition on inputs
	$('.input--confirm').on('click', function() {
		$(this).parents('.inputs-infos').find('input').each(function () {
			$(this).siblings('p.input--disabled').text( $(this).val() );
		});		
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
	});

	//Asks for confirmation on input delete
	$('.input--delete').on('click', function() {
		$('body').css('overflow-y', 'hidden');
		$('.modal').show();
		$(this).parents('.inputs-infos').addClass("deletable");
		setTimeout(function(){
			$('.modal--delete').css("opacity","1");
		}, 400);
	});
	// Checks if input elements are filled so labels start already active
	$('.input--inline').each(function () {
		if ($(this).val()) {
			$(this).next('label').addClass('label--active');
		}
	});
});
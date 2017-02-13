$(document).ready(function() {
	// Closes a dropdown that is already opened if you click on another one
	$('.input').on('click', function (activateDropdown) {
		$('.dropdown').removeClass('dropdown--active').css("opacity","0");
		$('.upper-bar-menu').removeClass('upper-bar-menu--active');
		$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate("opacity","1");
		$(this).siblings('.dropdown').find("input[type='search']").focus();
	});
	// Closes the dropdown by clicking out of it
	$(document).on('click', function(toggleDropdown) {
		// If the click on the document is not a .dropdown, an .input or .upper-bar-menu--active, closes all dropdowns
		if (!$(toggleDropdown.target).closest('.dropdown, .input, .input--inline--dropdown, .upper-bar-menu--active').length) {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$('.upper-bar-menu').removeClass('upper-bar-menu--active');
			$('.input--inline--dropdown').removeClass('input--inline--active');
			$('.input--inline--dropdown').next().removeClass('accent');
		}
	});
	//Closes opened menu dropdowns if you click on its trigger again
	$('.upper-bar-menu').on('click', function () {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$(this).toggleClass('upper-bar-menu--active');
		$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
	})
	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').not('.dropdown li.search__subheading, .outro-genero').on('click', function() {
		var textFromDropdown = $(this).find('span').text();
		$(this).parents('.dropdown').siblings('.input').find('span').text(textFromDropdown);
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.input--inline').next().removeClass('accent');
		$('.input--inline').removeClass('input--inline--active');
	});
	//Specific for Gender dropdown on New Contact
	$('.outro-genero a').on('click', function() {
		if ($('#contato-outro-genero').val().length > 0) {
			var anotherGender = $('#contato-outro-genero').val();
			$('.outro-genero').parents('.dropdown').siblings('.input').find('span').text(anotherGender);
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		}
	});
});

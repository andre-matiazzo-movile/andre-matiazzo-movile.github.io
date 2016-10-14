// Campaign Dropdown

// Finds object state by its opacity
var campaignOpacity = $('.dropdown.dropdown--campaign').css('opacity');

// If opacity equals zero OR the other dropdown is active, then show the object and deactivate the other one
// Pointer cursor is used because of iOS devices, that doesn't allow click events on nonclickable objects
$('.filters__item--campaign .input, .dropdown--campaign').click(function (campaignDropdownShow) {
	if (campaignOpacity === '0' || $('.dropdown--user-or-la').hasClass('dropdown--active')) {
		$('.dropdown--campaign').addClass('dropdown--active').animate({opacity: 1}, 15);
		$('body').css('cursor', 'pointer');
		$('.dropdown--user-or-la').removeClass('dropdown--active');
		$('.bottom-bar').animate({bottom: '-60px'}, 200, 'swing');
		campaignDropdownShow.stopPropagation();
	}
});

// If there's a click on any part of the document except the object itself, then hide the object
$(document).click(function(campaignDropdownHide) {
	if ($('.dropdown--campaign').hasClass('dropdown--active')) {
		$('.dropdown--campaign').animate({opacity: 0}, 100).removeClass('dropdown--active');		
		$('body').css('cursor', 'auto');
		$('.bottom-bar').animate({bottom: 0}, 200, 'swing');
		campaignDropdownHide.stopPropagation();
	}
});

// Finds object state by its opacity
var userOpacity = $('.dropdown.dropdown--user-or-la').css('opacity');

// If opacity equals zero OR the other dropdown is active, then show the object and deactivate the other one
// Pointer cursor is used because of iOS devices, that doesn't allow click events on nonclickable objects
$('.filters__item--user-or-la .input, .dropdown--user-or-la').click(function (userDropdownShow) {
	if (userOpacity === '0' || $('.dropdown--campaign').hasClass('dropdown--active')) {
		$('.dropdown--user-or-la').addClass('dropdown--active');
		$('.dropdown--user-or-la').animate({opacity: 1}, 15);
		$('body').css('cursor', 'pointer');
		$('.bottom-bar').animate({bottom:'-60px'}, 200, 'swing');
		$('.dropdown--campaign').css('opacity', '0' && function () {
			$(this).removeClass('dropdown--active');
		});
		userDropdownShow.stopPropagation();
	}
});

// If there's a click on any part of the document except the object itself, then hide the object
$(document).click(function(userDropdownHide) {
	if ($('.dropdown--user-or-la').hasClass('dropdown--active')) {
		$('.dropdown--user-or-la').animate({opacity: 0}, 100);
		$('.dropdown--user-or-la').removeClass('dropdown--active');
		$('body').css('cursor', 'auto');
		$('.bottom-bar').animate({bottom:0}, 200, 'swing');
		userDropdownHide.stopPropagation();
	}
});

// Filters' Modal on Mobile
// Get the modal
var modal = document.getElementById('bottomModal');
// Get the button that opens the modal
var btn = document.getElementById("modalTrigger");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}

}
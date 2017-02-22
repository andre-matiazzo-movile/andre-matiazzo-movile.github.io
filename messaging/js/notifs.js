$(document).ready( function () {

	// Change notifications' state to read when "Mark all as read" is clicked
	$('.mark-all-as-read').bind('click', function () {
		$('.can-be-read').css('color', '#ABB2B5');
		$('.notif__status span').css('background-color', '#F3F4F5');
		$('.notif__icon img').attr('src', 'img/icons/graph-black-20.png');
	});

	// Change a specific notification state to read when its action item is clicked on
	$('.notif__actions a, .notif__actions button').bind('click', function() {
		$(this).parents('.notif__item').find('.can-be-read').css('color', '#ABB2B5');
		$(this).parents('.notif__item').find('.notif__status span').css('background-color', '#F3F4F5');
		$(this).parents('.notif__item').find('.notif__icon img').attr('src', 'img/icons/graph-black-20.png');
	});

	$('.details__trigger').bind('click', function () {
		$(this).next('.details__list').slideToggle();
		$(this).find('span').toggleClass('accordion');
	});
});
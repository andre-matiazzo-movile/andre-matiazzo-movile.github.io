$(document).ready(function() {
	// INLINE DROPDOWNs
	// gives a min-width for every inline dropdown based on the longest content inside
	var n = $(".dropdown-item-box").length;
	$(document).find(".dropdown-item-box").each(function(){
		var w = $(this).width();
		var w2 = Math.round(w);
		$(this).parents(".has-dropdown").find(".view-box-close").css("min-width", w2+"px");
		$(this).children(".insert-criteria").css("min-width", w2+"px");
	});
	$(".view-box-open").hide();
	$(".view-box-open").removeClass("o-0");
	// when clicked on the dropdown word, it opens the full box
	$(".view-box-close").on('click', function() {
		$(this).next(".view-box-open").fadeIn(15);
	});
	// when an option is selected on the inline dropdown, the full box fades and the option becomes blue
	$(".view-criteria").on('click', function() {
		var text = $(this).text();
		$(this).parents(".has-dropdown").find(".insert-criteria").text(text);
		$(this).parent().children(".view-criteria").css("color","#37474F")
		$(this).css("color","#84ADFF")
		$(".view-box-open").hide();
	});
	// The full inline dropdown closes when you click anywhere but on it
	$(document).mouseup(function (e) {
		var target = $(".view-box-open");
	    if (!target.is(e.target) // if the target of the click isn't the box
	        && target.has(e.target).length === 0) // nor a descendant of the target
	    { target.fadeOut(); }
	});
});
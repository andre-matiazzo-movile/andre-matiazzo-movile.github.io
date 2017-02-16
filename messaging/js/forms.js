
$(document).ready(function() {

	// INLINE DROPDOWNs
	// gives a min-width for every inline dropdown based on the longest content inside
	var n = $(".dropdown-item-box").length;
	$(document).find(".dropdown-item-box").each(function(){
		var w = $(this).width();
		var w2 = Math.round(w);
		var w2 = w2 + 18;
		$(this).parents(".has-dropdown").find(".view-box-close").css("min-width", w2+"px");
		$(this).children(".insert-criteria").css("min-width", w2+"px");
	});
	$(".view-box-open").hide();
	$(".view-box-open").removeClass("o-0");

	// when clicked on the dropdown word, it opens the full box
	$(".view-box-close").bind('click', function() {
		$(this).next(".view-box-open").fadeIn(15);
	});

	// when an option is selected on the inline dropdown, the full box fades and the option becomes blue
	$(".view-criteria").bind('click', function() {
		var text = $(this).text();
		$(this).parents(".has-dropdown").find(".insert-criteria").text(text);
		$(this).parent().children(".view-criteria").css("color","#37474F")
		$(this).css("color","#84ADFF")
		$(".view-box-open").hide();
	});

	// The full inline dropdown closes when you click anywhere but on it
	$(document).mouseup(function (e) {
		var target = $(".view-box-open");
		    if (!target.is(e.target) // if the target of the click isn't the target...
		        && target.has(e.target).length === 0) // ... nor a descendant of the target
		    {
		    	target.fadeOut();
		    }
		});


	// BOX DROPDOWNS

	// Closes a dropdown that is already opened if you click on another one
	$('.input, .input-envio').bind('click', function (activateDropdown) {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.upper-bar-menu').removeClass('upper-bar-menu--active');
		$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		$(this).siblings('.dropdown').find("input[type='search']").focus();
	});

		// Closes the dropdown by clicking out of it
		$(document).bind('click', function(toggleDropdown) {
			// If the click on the document is not a .dropdown, an .input or .upper-bar-menu--active, closes all dropdowns
			if (!$(toggleDropdown.target).closest('.dropdown, .input, .input--inline--dropdown, .input-envio, .upper-bar-menu--active').length) {
				$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
				$('.upper-bar-menu').removeClass('upper-bar-menu--active');
				$('.input--inline--dropdown').removeClass('input--inline--active');
				$('.input--inline--dropdown').siblings('label').removeClass('accent');
				$('.input--inline').removeClass('input--inline--active');
			}
		});

		//Closes opened menu dropdowns if you click on its trigger again
		$('.upper-bar-menu').bind('click', function () {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$(this).toggleClass('upper-bar-menu--active');
			$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		})

	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').not('.dropdown li.search__subheading, .input-inside-list, .dropdown--multiple-lists li').bind('click', function() {
		var textFromDropdown = $(this).find('span').text();
		$(this).parents('.dropdown').siblings('.input').find('span').text(textFromDropdown);
		$(this).parents('.dropdown').siblings('.input').val(textFromDropdown);
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.input--inline').next().removeClass('accent');
		$('.input--inline').removeClass('input--inline--active');
	});

	//Specific for inputs inside dropdowns
	$('.input-inside-list button').on('click', function() {
		if ($(this).parents('.input-inside-list').find('input').val().length > 0) {
			var inputValue = $(this).parents('.input-inside-list').find('input').val();
			$('.input-inside-list').parents('.dropdown').siblings('.input').find('span').text(inputValue);
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$('.input--inline').removeClass('input--inline--active');
		}
	});

	// Dropdown with checkbox inside it
	$('.dropdown-checkbox').on('click', function() {
		var length = $(this).parents(".dropdown-item-box").find(".dropdown-checkbox:checked").length;
		if (length == 0) {
			$(this).prop('checked', true);
		}
		var selected = $('.dropdown-checkbox:checked').map(function() {
			return this.value;
		}).get().join(', ');
		$(this).parents(".has-dropdown").find(".insert-criteria").text(selected);
	});


	// Inline inputs on focus
	$('.input--inline').on('focus click, click', function() {
		$(this).addClass('input--inline--active');
		$(this).next().addClass('label--active accent');
	});

	// Inline inputs off focus
	$('.input--inline').on('blur', function() {
		if (!$(this).val()) {
			$(this).removeClass('input--inline--active');
			$(this).next().removeClass('label--active accent');
		} else {
			$(this).next().removeClass('accent');
			$(this).removeClass('input--inline--active');
		}
	});

	//Edit created inputs
	$('.input--edit, .input--cancel').on('click', function () {
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
		if ($(this).hasClass('cta')) {
			// $(this).removeClass('input--edit').addClass('input--confirm')
			// $(this).find('span').removeClass('icon-edit--blue').addClass('icon-check').text('salvar');
			$(this).hide();
			$(this).siblings('.cta.input--confirm').show();
			$(this).siblings('.icon-blacklist').hide();
		}
	});

	//Cancel edition on inputs
	$('.input--cancel').on('click', function() {
		$(this).parents('.inputs-infos').find('input').each(function () {
			var originalInputText = $(this).siblings('p.input--disabled').text();
			$(this).val(originalInputText);
		});
	});

	//Save edition on inputs
	$('.input--confirm').on('click', function() {
		// Get texts from inputs
		$(this).parents('.inputs-infos').find('input').each(function () {
			$(this).siblings('p.input--disabled').text($(this).val());
		});
		// Get texts from textarea
		$(this).parents('.inputs-infos').find('textarea').each(function () {
			$(this).siblings('p.input--disabled').text($(this).val());
		});		
		// Get texts from dropdowns
		$(this).parents('.inputs-infos').find('.input--inline--dropdown').each(function () {
			$(this).find('p.input--disabled').text($(this).find('.input--inline').text());
		});	
		// Confirm saving and return to original buttons
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
		if ($(this).hasClass('cta')) {
			$(this).siblings('.input--saved').show()
			$(this).hide();
			setTimeout(function(){
				$('.input--confirm').siblings('.input--edit, .icon-blacklist').show();
				$('.input--confirm').siblings('.input--saved').hide();
			}, 4000);
		}

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

	// Confirm deletions
	$('.input--yes-delete').on('click', function(){
		setTimeout(function(){
			$('.deletable').slideUp();
			setTimeout(function(){
				$('.deletable').remove();
			}, 400);
		}, 400);
	});

	// Checks if input elements are filled so labels start already active
	$('.input--inline').each(function () {
		if ($(this).val()) {
			$(this).next('label').addClass('label--active');
		}
	});



});
$( document ).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    if ( ($(window).width()) > '479') {
      $('#menu__platform').fadeToggle(150);
    }
  });

  // Open and close mobile menu
  $('#menu-open').on('click', function () {
    $('#menu__container').fadeIn(150);
    $(this).hide();
    $('#menu-close').show();
  });

  $('#menu-close').on('click', function () {
    $('#menu__container').fadeOut(150);
    $(this).hide();
    $('#menu-open').show();
  });

  // Scroll anchor points
  var $root = $('html, body');
  $('a[href$="#who"]').click(function () {
    $root.animate({
      scrollTop:$($.attr(this,'href')).offset().top
    }, 500);
    return false;
  });

  // Accordions
  $('.accordion h3').on('click', function() {
    $('.accordion h3').removeClass('black');
    $('.accordion h3').addClass('gray');
    $('.accordion p').slideUp();
    $(this).parent().find('p').slideToggle();
    $(this).removeClass('gray');
    $(this).addClass('black');
    $('.sms_example').hide();
    if ($(this).is('#sms_trigger--corp')) {
      $('.sms_example--corp').fadeIn(150);
    } else if ($(this).is('#sms_trigger--mkt')) {
      $('.sms_example--mkt').fadeIn(150);
    } else if ($(this).is('#sms_trigger--conc')) {
      $('.sms_example--conc').fadeIn(150);
    } else if ($(this).is('#sms_trigger--flash')) {
      $('.sms_example--flash').fadeIn(150);
    }
  });
});
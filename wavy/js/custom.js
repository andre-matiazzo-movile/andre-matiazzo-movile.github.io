$( document).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    if ( ($(window).width()) > '960') {
      $('#menu__platform').fadeToggle(150);
    }
  });

  // Open and close mobile menu
  $('#menu-open').on('click', function () {
    $('#menu__container').fadeIn(150);
    $(this).hide();
    $('#menu-close').show();
    $('nav').addClass('bg-transparent');
  });

  $('#menu-close').on('click', function () {
    $('#menu__container').fadeOut(150);
    $(this).hide();
    $('#menu-open').show();
    $('nav').removeClass('bg-transparent');
  });

  // Scroll anchor points
  var $root = $('html, body');
  $('a[href$="#who"], a[href$="#vantagens"], a[href$="#tipos"]' ).click(function () {
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

  // Menu is fixed after scroll
  $(window).scroll(function(){
    var scrollNow = $(window).scrollTop();
    setTimeout(function(){
      var scrollAfter = $(window).scrollTop();
      setTimeout(function(){
        if (scrollAfter < scrollNow) {
          $("nav").css("top", "0").addClass("bg-white bb b--black-10");
          $('.brand img').attr('src', 'https://andre-matiazzo-movile.github.io/wavy/img/logo.svg');
          $('#menu__container a').not('#menu__platform a').addClass('black-ns');
          $('.cta-menu').removeClass('dn-ns');
          $('#menu-open span').addClass('bg-black');
        } else if (scrollAfter > scrollNow) {
          $("nav").css("top", "-100%");
          $('.brand img').attr('src', 'https://andre-matiazzo-movile.github.io/wavy/img/logo-branco.svg');
          $('#menu__container a').removeClass('black-ns');
          $('.cta-menu').addClass('dn-ns');
          $('#menu-open span').removeClass('bg-black');
        } else if (scrollAfter == 0) {
          $('.brand img').attr('src', 'https://andre-matiazzo-movile.github.io/wavy/img/logo-branco.svg');
          $("nav").removeClass("bg-white bb b--black-10");
          $('#menu__container a').removeClass('black-ns');
          $('#menu-open span').removeClass('bg-black');
          $('.cta-menu').addClass('dn-ns');
        } else {
          return;
        }
      }, 50);
    }, 50);
  });
});
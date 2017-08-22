$( document ).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    if ( ($(window).width()) > '479') {
      $('#menu__platform').fadeToggle(150);
    }
  });

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
});
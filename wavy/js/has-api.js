$(document).ready(function() {

  // Global tabs (for choosing channels)
  $('.api-triggers--js a').on('click', function() {
    $('.api-channel-trigger--js').removeClass('blue b--blue').addClass('b--transparent');
    $(this).addClass('blue b--blue');
    $('.API-channel-container').hide();
    if ($(this).hasClass('trigger--sms')) {
      $('#API_SMS').show();
    }
  });

    // Navigate through SMS channels
    $('#API_SMS--menu a').on('click', function() {
      $('#API_SMS--menu a').removeClass('purple').addClass('black-30');
      $(this).addClass('purple');
      $('.channels-content--js > div').hide();
      if ($(this).hasClass('cURL-trigger--js')) {
        $('.triggered-cURL--js').show();
      } else if ($(this).hasClass('Ruby-trigger--js')) {
        $('.triggered-Ruby--js').show();
      } else if ($(this).hasClass('Python-trigger--js')) {
        $('.triggered-Python--js').show();
      } else if ($(this).hasClass('PHP-trigger--js')) {
        $('.triggered-PHP--js').show();
      } else if ($(this).hasClass('Java-trigger--js')) {
        $('.triggered-Java--js').show();
      }
    });

  });
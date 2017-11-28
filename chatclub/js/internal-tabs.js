$(document).ready(function() {

  // Global tabs (for choosing channels)
  $('.api-triggers--js a').on('click', function() {
    $('.api-channel-trigger--js').removeClass('blue b--blue').addClass('b--transparent');
    $(this).addClass('white b--blue');
    $('.API-channel-container').hide();
    $('.tab-description').hide()
    if ($(this).hasClass('trigger--sms')) {
      $('#API_SMS').show();
      $('.first-tab-description').show();
    } else if ($(this).hasClass('trigger--email')) {
      $('#API_Email').show();
      $('.second-tab-description').show();
      $('.cURL-trigger--js').addClass('blue-2');
    } else if ($(this).hasClass('trigger--voice')) {
      $('#API_Voice').show();
      $('.third-tab-description').show();
    }
  });

    // Navigate through SMS channels
    $('#API_Email--menu a').on('click', function() {
      $('#API_Email--menu a').removeClass('blue-2').addClass('black-30');
      $(this).addClass('blue-2');
      $(this).parents('.API-channel-container').find('.channels-content--js > div').hide();
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
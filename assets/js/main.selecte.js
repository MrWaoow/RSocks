function personalLocationForm() {
    const baseUrl = "../images/personal_proxy/buy personal proxy/private/";

    function formOptions(state) {
      if (!state.id) {
        return state.text;
      }
      const $state = $('<span class="option-country"><img src="' + baseUrl + '/' + $(state.element).data('iso') + '.svg" class="img-flag" /> ' + state.text + '</span>');
      return $state;
    }

    function templateCountrySelection(state) {
      if (!state.id) {
        return state.text;
      }

      const $state = $('<span class="result-country"><span class="flag"><img class="img-flag" alt="" /></span> <span class="text"></span></span>');

      $state.find('span.text').text(state.text);
      $state.find('img').attr('src', baseUrl + '/' + $(state.element).data('iso') + '.svg');

      return $state;
    }

    function templateMessengerSelection(state) {
      if (!state.id) {
        return state.text;
      }

      const $state = $(
          '<span class="result-messenger"><span class="icon"><img class="img-icon" alt="" /></span><span class="text"></span></span>'
      );

      $state.find('span.text').text(state.text);
      $state.find('img').attr('src', '/resources/icons/' + $(state.element).data('icon') + '.svg');

      return $state;
    }

    $('.country-select').select2({
      theme: 'dark',
      width: '100%',
      templateResult: formOptions,
      templateSelection: templateCountrySelection
    });

    $('.messenger-select').select2({
      theme: 'dark',
      width: '100%',
      minimumResultsForSearch: Infinity,
      templateSelection: templateMessengerSelection
    }).change(function () {
      if ($(this).val() === 'telegram') {
        $('.messenger-value').attr('placeholder', '@Example')
      } else if ($(this).val() === 'skype') {
        $('.messenger-value').attr('placeholder', 'example')
      } else {
        $('.messenger-value').attr('placeholder', 'example@gmail.com')
      }
    });

    $('#jsa__personal-location-form__btn').on('click', function (e) {
      e.preventDefault()
      $.ajax({
        url: '/frontend/api/request-mobile-private',
        data: $('#form_request_private_device').serialize(),
        method: 'POST',
        success: function (data) {
          if (!data.result) {
            toastr.error(data.error, "Rsocks.net");
          } else {
            $('.personal-location-form').find('.js-form-content').addClass('--hidden');
            $('.personal-location-form').find('.js-success-message').addClass('--shown');
          }
        }
      });
    });
  }
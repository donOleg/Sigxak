$(document).ready(function() {

  $('#portfolio-grid').mixItUp();

  $('.popup').magnificPopup({type:'image'});
  $('.popup_content').magnificPopup();

  $('#contactForm').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      }
    },
    messages: {
      email: {
        required: 'This field "Email" is required'
      },
      name: {
        required: 'This field "Name" is required',
        minlength: 'The name must be more than 2 characters'
      }
    },
    submitHandler: function() {
      alert('valid');
      // form.submit();
    }
  });
});

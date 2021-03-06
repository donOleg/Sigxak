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

  $('.nav-list__link').click(function(e){
    e.preventDefault();
    $('.nav__list').stop(true, true).slideToggle(1000);
  });

  $("a.nav__link").mPageScroll2id();

});

$("document").ready(function(){
  $('.nav-list').hide();
  var hamDiv = document.getElementById('hamburger');
  $(".moveTo").on("click", function(){
    if ($(".c-hamburger--rot").hasClass('is-active')) {
      $(hamDiv).removeClass("is-active");
      $('.nav-list').hide();
    };
    var clicked = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(clicked).offset().top - 35
      }, 1000);
    return false;
    });

  $(hamDiv).on('click', function(){
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    (this.classList.contains("is-active") === true) ? $('.nav-list').show() : $('.nav-list').hide();
  })
})
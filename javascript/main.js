$("document").ready(function(){
  var hamDiv = document.getElementById('hamburger');
  $(".moveTo").on("click", function(){
    if ($(".c-hamburger--rot").hasClass('is-active')) {
      $(hamDiv).removeClass("is-active");
      if ($(window).width() < 750) {
        $('.nav-list').hide();
      };
    };
    var clicked = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(clicked).offset().top - 35
      }, 1000);
    return false;
    });
  if ($(window).width() < 750){
      $(hamDiv).on('click', function(){
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        (this.classList.contains("is-active") === true) ? $('.nav-list').show() : $('.nav-list').hide();
      })
  };
  $( window ).resize(function() {
    var times = 0;
    var hamDiv = document.getElementById('hamburger');
      if (hamDiv.classList.contains("is-active") === true) {
        hamDiv.classList.remove("is-active");
        $('.nav-list').hide(); 
      };

      if (($('.nav-list').is(':visible'))) {
        hamDiv.classList.add("is-active");
      };
      // if the nav-list doesn't show when ham is active
      if (($(window).width() < 750) && (hamDiv.classList.contains("is-active") === true)){
        $('.nav-list').show(); 
      };  
      // show nav in desktop
      if ($(window).width() > 750) {
        $('.nav-list').show(); 
      };
  });
})
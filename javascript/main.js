$("document").ready(function(){
  if ($(window).width() < 750){
    $("#hamburger").on('click', function(){        
      if (this.classList.contains("is-active")) {
        this.classList.remove("is-active");
        $('.nav-list').hide();
      } else {
        this.classList.add("is-active");
        $('.nav-list').show();
      };
    })
    $(".moveTo").on("click", function(){
      checkHam();
      var clicked = $(this).attr('href');
      scrolling(clicked);
      return false;
    });
  } else {
    $(".moveTo").on("click", function(){
      var clicked = $(this).attr('href');
      scrolling(clicked);
      return false;
    });
  };

  $( window ).resize(function() {
    if ($(window).width() < 750) {
      $('.nav-list').hide(); 
      $("#hamburger").removeClass("is-active");
    } else{
      $('.nav-list').show(); 
    };
  });

  function scrolling(clicked) {
    $('html, body').animate({
        scrollTop: $(clicked).offset().top - 35
      }, 1000);
  }
  function checkHam() {
    if ($(".c-hamburger--rot").hasClass('is-active')) {
      $('#hamburger').removeClass("is-active");
      if ($(window).width() < 750) {
        $('.nav-list').hide();
      };
    };
  }
})
$("document").ready(function(){
  $(".moveTo").on("click", function(){
    var clicked = $(this).attr('href');
    $('html, body').animate({
          scrollTop: $(clicked).offset().top - 35
      }, 1000);
    return false;
    });
  
})
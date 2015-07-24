$.fn.MessageBox = function(msg) {
  var clicked = "."+msg;
$('html, body').animate({
        scrollTop: $(clicked).offset().top - 35
    }, 1000);
};
$("").on("click", function(){})
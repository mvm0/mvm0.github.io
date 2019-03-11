$("aside").on('click', '[href*="#"]', function(e){
    var id  = $(this).attr('href'),
    top = $(id).offset().top; 
    $('body,html').stop().animate({scrollTop: top-2}, 2500);
    e.preventDefault();
  });
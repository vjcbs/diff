$(document).ready( function() {
  console.log('Document is ready');
  // let img = $('.about__img')

  $('.works__img').click(function() {
    console.log('clicked!');
    $(this).animate({
      opacity: 0.25,
    }, 500, function(){
      $(this).animate({
        opacity: 1,
      }, 500, function(){
        console.log('Complete!');
      });
    });
  });
})

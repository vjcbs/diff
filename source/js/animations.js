$(document).ready( function() {
  // console.log('Document is ready');
  // let img = $('.about__img')

  let animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

	$('#birdSVG').on('click', function(){
		$('.bird').addClass('animated');
		$(this).on(animationEvent, function(e){
			$('.bird').removeClass('animated');
		})
	})

  createWaves('.works__img');
  f(5);

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

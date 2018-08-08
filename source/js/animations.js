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

  $('#lineSVG').on('click', function(){
    if ($(this).css('animation-direction') === 'normal') {
      $(this).css('animation-direction', 'reverse');
    } else {
      $(this).css('animation-direction', 'normal');
    }

    // if ($(this).hasClass('spin-forward')) {
    //   $(this).removeClass('spin-forward');
    //   $(this).addClass('spin-backward');
    // } else {
    //   $(this).removeClass('spin-backward');
    //   $(this).addClass('spin-forward');
    // }
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

$(document).ready( function() {

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
  })

  $('.works__img').click(function() {
    $(this).animate({
      opacity: 0.25,
    }, 500, function(){
      $(this).animate({
        opacity: 1,
      }, 500, function(){
        
      });
    });
  });
})

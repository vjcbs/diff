$(document).ready(function(){
  $('.clients__img-wrapper').on('click', function(){
    if ($(this).hasClass('flipped')) {
      $(this).removeClass('flipped').css('transform', 'rotate(0)');
      console.log('Removing class flipped and transforming');
    } else {
      $(this).addClass('flipped').css('transform', 'rotate(-180deg)');
      console.log('Adding class flipped and transforming');
    }
  })
})

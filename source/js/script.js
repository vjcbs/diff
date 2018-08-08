$(document).ready(function(){
  $('.clients__img-wrapper').on('click', function(){
    if ($(this).hasClass('flipped')) {
      $(this).removeClass('flipped').css('transform', 'rotate(-180deg)');
    } else {
      $(this).addClass('flipped').css('transform', 'rotate(0)');
    }
  })
})

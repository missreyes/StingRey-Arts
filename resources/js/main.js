$(document).ready(function(){
  // $('.carousel').slick({
  $('.carousel').not('.slick-initialized').slick({
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var userXcrolled = 0;
  $(window).scroll (function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - userXcrolled > 50) {
      var newZeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + newZeight}, 150);
      userXcrolled = scrollTop;
    } else if  (userXcrolled - scrollTop  > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      userXcrolled = scrollTop;
    }
  });
});

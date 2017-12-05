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

  // var userXcrolled = 0;
  // $(window).scroll (function() {
  //   var scrollTop = $(this).scrollTop();
  //   if (scrollTop - userXcrolled > 50) {
  //     var newZeight = $('.navbar').css('height');
  //     $('.navbar').animate({top: '-' + newZeight}, 150);
  //     userXcrolled = scrollTop;
  //   } else if  (userXcrolled - scrollTop  > 50) {
  //     $('.navbar').animate({top: '0px'}, 150);
  //     userXcrolled = scrollTop;
  //   }

  $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 700) {
        $('.navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 710) {
        $('.navbar').removeClass('navbar-fixed');
      }

  });
});

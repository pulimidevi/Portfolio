$(document).ready(function () {

  // Navbar background change on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });

  // Smooth scrolling for internal links
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    let target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').stop().animate(
        {
          scrollTop: target.offset().top
        },
        800
      );
    }
  });

});

(function($) {
  // When to show the scroll link
  // higher number = scroll link appears further down the page
  var upperLimit = 1000;

  // Our scroll link element
  var scrollElem = $('#totop');

  alert($(document).scrollTop());

  // Scroll to top speed
  var scrollSpeed = 500;

  // Show and hide the scroll to top link based on scroll position
  scrollElem.hide();

  $(window).scroll(function() {
    alert(2)
    var scrollTop = $(document).scrollTop();
    if (scrollTop > upperLimit) {
      $(scrollElem).stop().fadeTo(300, 1); // fade back in
    } else {
      $(scrollElem).stop().fadeTo(300, 0); // fade out
    }
  });

  // Scroll to top animation on click
  $("#totop").click(function() {
    alert("onclick");
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });


})(jQuery);

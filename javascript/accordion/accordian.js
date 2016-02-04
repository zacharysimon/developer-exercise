$(document).ready(function() {
  
  $(".accordion-header > div").hide();

  $(".accordion-header > a").click(function() {
    $(".accordion-header > div").hide();
    $(this).siblings().show();
  });

});
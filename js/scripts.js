
$(document).ready(function() {

      $("p").click(function() {
      $(".walrus-show").toggle();
      $(".walrus-hide").toggle();
  });

      $("h2").click(function() {
      $("h1").slideToggle();
  });
      $("h3").click(function() {
      $("h1").fadeToggle();
  });

});

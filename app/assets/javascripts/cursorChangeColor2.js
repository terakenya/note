$(document).on('turbolinks:load', function() {
  $(".introduction").on("focus", function() {
    $(".introduction").css("border-color","#3cc49c");
  });
  $(".introduction").on("blur", function() {
    $(".introduction").css("border-color","#E8ECEB");
  });
});

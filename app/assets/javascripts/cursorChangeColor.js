$(document).on('turbolinks:load', function() {
  $(".usagi").on("focus", function() {
    $(".usagi").css("border-color","#3cc49c");
  });
  $(".usagi").on("blur", function() {
    $(".usagi").css("border-color","#E8ECEB");
  });
});


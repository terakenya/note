$(document).on('turbolinks:load', function() {
  $(".c-avatar--small").on("click", function() {
    $('.renewal-c-popover--mymenu').not(":animated").fadeToggle(10)
  });
});

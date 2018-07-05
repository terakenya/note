$(document).on('turbolinks:load', function() {
  $(".renewal-p-icon--postNote").on("click", function() {
    $('.renewal-c-popover--postNote').not(":animated").fadeToggle(10)
  });
});

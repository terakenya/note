// $(document).on('turbolinks:load', function() {
//   $(".picture-30").on("click", function() {
//     $('.renewal-c-popover-renewal-c-popover--selectEyecatch').not(":animated").fadeToggle(10)
//   });
// });


$(function() {
  jadgeEdit = true
  $(document).click(function(event) {
    if($(event.target).closest('.renewal-c-popover-renewal-c-popover--selectEyecatch').length && jadgeEdit == false) {
      $('.renewal-c-popover-renewal-c-popover--selectEyecatch').not(":animated").fadeToggle(10)
      jadgeEdit = true
    } else if($(event.target).closest('.picture-30').length){
      $('.renewal-c-popover-renewal-c-popover--selectEyecatch').not(":animated").fadeToggle(10)
      jadgeEdit = false
    }
  });
});

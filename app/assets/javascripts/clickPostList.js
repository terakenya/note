// $(document).on('turbolinks:load', function() {
//   $(".renewal-p-icon--postNote").on("click", function() {
//     $('.renewal-c-popover--postNote').not(":animated").fadeToggle(10)
//   });
// });
$(function() {
  jadgePost = true
  $(document).click(function(event) {
    if(!$(event.target).closest('.renewal-c-popover--postNote').length && jadgePost == false) {
      $('.renewal-c-popover--postNote').not(":animated").fadeToggle(10)
      jadgePost = true
    } else if($(event.target).closest('.renewal-p-icon--postNote').length && jadgePost == true){
      console.log(jadge)
      $('.renewal-c-popover--postNote').not(":animated").fadeToggle(10)
      jadgePost = false
      console.log(jadge)
    }
  });
});

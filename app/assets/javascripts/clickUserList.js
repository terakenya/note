$(function() {
  jadge = true
  $(document).click(function(event) {
    if(!$(event.target).closest('.renewal-c-popover--mymenu').length && jadge == false) {
      $('.renewal-c-popover--mymenu').not(":animated").fadeToggle(10)
      jadge = true
    } else if($(event.target).closest('.c-avatar--small').length && jadge == true){
      console.log(jadge)
      $('.renewal-c-popover--mymenu').not(":animated").fadeToggle(10)
      jadge = false
      console.log(jadge)
    }
  });
});

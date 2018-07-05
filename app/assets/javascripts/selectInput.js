$(function(){

  $('.contentform').focus(function() {
    $('.embed-toolbar').css('visibility','visible');
  });
  $('.embed-toolbar').on('mousedown', function(e){
    $('#image').css({
      "display" : "inline"
    })
    $('#mainasu').css({
      "display" : "inline"
    })
    $('.plus').css({
      "display" : "none"
    })
    $('.embed-toolbar').css('visibility','visible');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".plus ,.contentform,#image").length) {
      $('.embed-toolbar').css('visibility','hidden');
      // フェードやスライドなどの処理方法を記述;
    }
  });
  $(document).on('click', function(e) {
    if ($(e.target).closest("#image").length) {
      $('.contentform').readOnly = true;
      $('#image').css({
        "display" : "none"
      })
      $('#mainasu').css({
        "display" : "none"
      })
      $('.plus').css({
        "display" : "inline"
      })
    }
  });
});

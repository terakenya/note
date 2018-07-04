// $(function(){
//   $('input').on('Focus', function(e){
//     e.preventDefault();
//     console.log("aaa")
//   })
// })
$(function(){
  $('.contentform').focus(function() {
    $('.embed-toolbar').css('visibility','visible');

  });
  $('.embed-toolbar').on('mousedown', function(e){
    console.log("aaa");
  });
  $('.contentform').blur(function() {
    $('.embed-toolbar').css('visibility','hidden');

  });
});

$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log("aaa")
    // var formData = new FormData(this);
    // var url = $(this).attr('action');
    // console.log("aaa")
    // $.ajax({
    //   url: url,
    //   type: "POST",
    //   data: formData,
    //   dataType: 'json',
    //   processData: false,
    //   contentType: false
    // })
    // .done(function(data){
    //   console.log(data)
    //   var html = buildHTML(data);
    //   $('.chatgroups').append(html);
    //   $('#new_message')[0].reset();
    //   scroll();
    //   $('.sendbutton').removeAttr("disabled");
    // })
  })
})

$(function(){
  function buildHTML(comment){
    var html = `<div class="p-comments__body" data-comment-id="${comment.id}">
                  <div class="p-comments__item">
                    <div class="p-comments__avatar">
                      <div class="c-avatar c-avatar--small">
                        <img class="c-avatar__img" data-src="https://d2l930y2yx77uc.cloudfront.net/assets/default/default_profile-2f533b6a0048b61b8d761198d14cbb4c603f89edb03577f061efc7393b85d811.png" src="https://d2l930y2yx77uc.cloudfront.net/assets/default/default_profile-2f533b6a0048b61b8d761198d14cbb4c603f89edb03577f061efc7393b85d811.png"/>
                      </div>
                    </div>
                    <div class="p-comments__name">
                      <div class="p-comments__nameLink">
                        ${comment.name}
                      </div>
                    </div>
                    <div class="p-comments__status">
                      <div class="p-comments__date">
                        ${comment.created_at}
                      </div>
                    </div>
                    <div class="p-comments__message">
                      ${ comment.text }
                    </div>
                  </div>
                </div>`;
    return html;

  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.p-comments__title').append(html);
      $('#new_comment')[0].reset();
      $('.submit-comment').removeAttr("disabled");
    })
  })

  $('.commentform').focus(function() {
    $('.c-button--size_small').css('visibility','visible');
  });
    $('.commentform').blur(function() {
      setTimeout(function() {
        $('.c-button--size_small').css('visibility','hidden');
      }, 250);
  });
})

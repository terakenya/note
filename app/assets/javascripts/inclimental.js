$(function() {
  function appendUser(user ,input) {
    var html = `
                <a href="/users/${user.id}/menu">
                  <div class="angucomplete-dropdownB">
                    <div class="angucomplete-row-angucomplete-selected-row">
                      <div class="angucomplete-image-holder">
                        <img class="list-image" src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/6872559/profile_d227b8ba49f78d2420ed6f945630fce3.jpg">
                      </div>
                      <div class="angucomplete-title">
                        ${user.name}
                      </div>
                    </div>
                    <div class="user-search"></div>
                  </div>
                </a>
                `
    return html
  }

  function searchUser(input) {
    var html = `
                <div class="angucomplete-dropdownA">
                  <div class="angucomplete-row-angucomplete-selected-row">
                    ${input}で全体を検索
                  </div>
                </div>
                `
    return html
  }



$(document).on('turbolinks:render', function() {
  location.reload();
});

  $("#usersearch").on("keyup", function() {
    var input = $.trim($(this).val());
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $(".angucomplete-dropdown").empty();
      if(input.length != 0){
        var html = searchUser(input);
      }
      $('.angucomplete-dropdown').append(html);
      if(users.length != 0 && input!=false) {
        users.forEach(function(user) {
          var html = appendUser(user,input);
          $('.angucomplete-dropdown').append(html);
        });
      } else if(users.length == 0){
      }
    })
  })
});

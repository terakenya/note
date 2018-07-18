$(function() {
  function appendUser(user ,input) {
    if (user.usericon) {
      var icon = `<img class="list-image" src="${user.usericon}">`;
    } else {
      var icon = `<img class="list-image" src="/assets/smile-309b15228a2f723356bee21cee9f7e355c7d24ba2ac3ad3636c4bbecf3060204.png">`;
    }
    var html = `
                <a href="/users/${user.id}/menu">
                  <div class="angucomplete-dropdownB">
                    <div class="angucomplete-row-angucomplete-selected-row">
                      <div class="angucomplete-image-holder">
                        ${icon}
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

  //戻るボタンなどで読み込まれる際もリロード
  $(document).on('turbolinks:render', function() {
    location.reload();
  });
  $(document).on('click', function() {
    if(!$(event.target).closest('.angucomplete-dropdown').length) {
      $(".angucomplete-dropdown").empty();
    }
  });
  //キーアップされたらインクリメンタルサーチ実行
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

$(function() {
  function appendUser(user ,input) {
    var html = `<div class="angucomplete-dropdownA">
                  <div class="angucomplete-row-angucomplete-selected-row">${input}で全体を検索</div>
                </div>
                <div class="angucomplete-dropdownB">
                  <div class="angucomplete-row-angucomplete-selected-row">${user.name}</div>
                </div>`
    return html
  }
  function searchUser(input) {
    var html = `<div class="angucomplete-dropdownA">
                  <div class="angucomplete-row-angucomplete-selected-row">${input}で全体を検索</div>
                </div>
                `
    return html
  }

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
        if(users.length != 0 && input!=false) {
          users.forEach(function(user) {
            var html = appendUser(user,input);
            $('.angucomplete-dropdown').append(html);
          });
        } else if(users.length == 0){
          console.log(input)
          var html = searchUser(input);
          $('.angucomplete-dropdown').append(html);
         // appendNoUser();
        }
    })
  //   .fail(function() {
  //     alert('error');
  //   })
  // });
  })
});

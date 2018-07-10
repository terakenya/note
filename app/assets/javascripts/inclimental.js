$(function() {
  var users_list = $("#user-search-result");
  function appendUser(user) {
    // var html = `<div class="chat-group-user clearfix">
    //             <p class="chat-group-user__name">${user.nickname}</p>
    //             <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id = ${user.id} data-user-name=${user.nickname}>追加</a>
    //             </div>
    //             `
    users_list.append(html);
  }

  $("#usersearch").on("keyup", function() {
    var input = $.trim($(this).val());
    console.log(input)
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      console.log(users)
      // $("#user-search-result").empty();
      // if(users.length !== 0) {
      //   users.forEach(function(user) {
      //     appendUser(user);
      //   });
      // } else {
      //   appendNoUser();
      // }
    })
  //   .fail(function() {
  //     alert('error');
  //   })
  // });
  })
});

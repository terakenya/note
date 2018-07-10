$(function() {
  var users_list = $("#user-search-result");
  function appendUser(user) {
    var html = `<div class="angucomplete-dropdownA">
                  <div class="angucomplete-row-angucomplete-selected-row"></div>
                </div>
                <div class="angucomplete-dropdownB">
                  <div class="angucomplete-row-angucomplete-selected-row"></div>
                </div>`
    angucomplete-dropdown.append(html);
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
      $(".angucomplete-dropdown").empty();
        if(users.length !== 0) {
          users.forEach(function(user) {
            appendUser(user);
          });
        } else {
         // appendNoUser();
        }
    })
  //   .fail(function() {
  //     alert('error');
  //   })
  // });
  })
});

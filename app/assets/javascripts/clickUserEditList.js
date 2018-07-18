$(function() {
  var onoff = true;
  function buildHTML(){
    var html = `
                <a class="renewal-c-popover__item" href="/users/2/menu/new">
                  プロフィールを編集する
                </a>
                <div class="renewal-c-popover__separator">
                </div>
                <div class="renewal-c-popover__item">
                  Amazonウィジェットを追加
                </div>
                `;
    return html;
  }
  $(".menu2").on('click', function(e){
    if (onoff == true){
      onoff = false
      var html = buildHTML();
      $('.renewal-p-creator__actionPopover__inner').append(html);
    } else {
      onoff = true
      $(".renewal-p-creator__actionPopover__inner").empty();
    }
  })
});

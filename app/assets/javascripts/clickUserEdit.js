$(function() {
  function buildHTML(){
    var html = `
                <a class="renewal-c-popover__item" href="/users/2/menu/new">
                  プロフィールを編集する
                  <div class="renewal-c-popover__separator">
                    <div class="renewal-c-popover__item"></div>
                      Amazonウィジェットを追加
                  </div>
                </a>
                `;
    return html;
  }
  $(".menu2").on('click', function(e){
    console.log(html);
    var html = buildHTML();
    console.log(html);
    $('.renewal-p-creator__actionPopover__inner').append(html);
  })
});

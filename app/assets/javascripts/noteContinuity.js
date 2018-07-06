$(function(){
  function buildHTML(comment){
    var html = `<div class="note-body">
                  <div class="body-wrapper">
                    <OeiGn></OeiGn>
                    <textarea class="contentform" cols="40" name="text" rows="4" placeholder="aaa"></textarea>
                  </div>
                </div>`;
    return html;

  }

  $( '.contentform' ).keypress( function ( e ) {
    if ( e.which == 13 ) {
      // ここに処理を記述
      var html = buildHTML();
      $('.note-body').append(html);
      $(this).next().focus();
    }
  });
});

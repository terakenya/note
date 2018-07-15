$(document).on('turbolinks:load', function() {
  $(".supporting").on("click", function() {
    window.alert('自分に対してサポートすることはできません。');
  });
});

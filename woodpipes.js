$(document).ready(function(){
    var i = 1;
    $('.translate').on('click', function(){
    i++;
    if (i == 2) {
      $('.english_header').text("Senor Woodpipes - Main Page")
      };
    if (i > 2) {
      $('.english_header').text("Mr. Woodpipes - Main Page");
      i = 1
      };
    });
});
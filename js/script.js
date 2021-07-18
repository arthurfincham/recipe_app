// Add your javascript here
$(document).ready(function(){
  console.log("click handler");

  var $btnTranslate = $("#btnTranslate");

  $btnTranslate.on('click', function(evt) {

  	var direction = $btnTranslate.text();
  	var nextDirection = (direction === "left") ? "right" : "left";
    $(".slidein-transition")
      .removeClass('slidein-from-' + nextDirection)
      .addClass('slidein-from-' + direction);

    $btnTranslate.text(nextDirection);


  });
});

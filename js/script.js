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

window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})
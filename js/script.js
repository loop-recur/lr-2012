$(document).ready(function(){

	$(".iPhone").append('<div class="time">' + hours + ":" + minutes + " " + suffix + '</div>');

	$(".expandable_trigger").click(showProjectDetails);
});

var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()

var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

if (minutes < 10)
minutes = "0" + minutes

var showProjectDetails = function(e) {
  var winWidth = $(window).width(),
      $details = $(this).find('.expandable'),
      detailsWidth = $details.width();
     
  $details.toggle();
  var detailsOffsetX = $details.offset().left;

  if ((detailsOffsetX + detailsWidth) > winWidth ) {
    $details.toggleClass('tooltip_left');
    $details.toggleClass('tooltip_right');
    $details.css({'left': '-300px'});
  }

  return false;
}


$(document).ready(function(){

  setInterval(getTime, 1000);
  
  $('img[usemap]').rwdImageMaps();
  
  $("area[href*='#']").pageScroll();
  
});

var getTime = function() {
  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      suffix = "AM";

  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }

  if (hours == 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  setTime(hours, minutes, suffix);
}

var setTime = function(hours, minutes, suffix) {
	$(".iPhone .time").html(hours + ":" + minutes + " " + suffix);
}


$(document).ready(function(){

	$(".iPhone").append('<div class="time">' + hours + ":" + minutes + " " + suffix + '</div>');
	
	// $(".anchorLink").anchorAnimate();
	
});

// jQuery.fn.anchorAnimate = function(settings) {
// 
//  	settings = jQuery.extend({
// 		speed : 1100
// 	}, settings);	
// 	
// 	return this.each(function(){
// 		var caller = this
// 		$(caller).click(function (event) {	
// 			event.preventDefault()
// 			var locationHref = window.location.href
// 			var elementClick = $(caller).attr("href")
// 			
// 			var destination = $(elementClick).offset().top;
// 			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
// 				window.location.hash = elementClick
// 			});
// 		  	return false;
// 		})
// 	})
// }

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







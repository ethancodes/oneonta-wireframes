
$(document).ready(function() {

	window.onresize = function(e) {
		viewportGo();
	}
	
	viewportGo();

});

function viewportSetTitle(vp, tvp) {
	var wdt = window.document.title.split(" | ");
	window.document.title = wdt[0] + " | Viewport is " + vp.toString() + " (" + tvp + ")";
}

function viewportSize(viewport) {
	var thisviewport = 's';	
	if (viewport >= 579 && viewport < 960) {
		thisviewport = 'm';
	} else if (viewport >= 960) {
		thisviewport = 'l';
	}
	return thisviewport;
}

function viewportGo() {

	var viewport = $(window).width();
	var thisviewport = viewportSize(viewport);
	
	if (thisviewport == "s" || thisviewport == "m") {
	
		$('.slideshow').html('<img src="http://placekitten.com/g/825/508" alt="aww">');
		$('body').removeClass('background-cover');
	
	} else if (thisviewport == "l") {
	
		$('.slideshow').html('&nbsp;');
		$('body').addClass('background-cover');
	
	}
	
	viewportSetTitle(viewport, thisviewport);

}
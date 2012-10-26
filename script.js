
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
		
		$('.dropclick:not(.dropclicked)').each(function() {
			// trick this out into a slick little drop down menu
			
			$(this).children().wrapAll('<div class="dropclick-items"></div>');
			
			var id = $(this).attr('id');
			var label = id.replace("-", " ");
			label = label.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
			    return $1.toUpperCase();
			});
			$(this).prepend('<div class="dropclick-menu">' + label + '</div>');
			
			$(this).children('.dropclick-menu').on('click', function() {
				$(this).siblings('.dropclick-items').slideToggle();
			});
			
			$(this).addClass('dropclicked');
			
		});
	
	} else if (thisviewport == "l") {
	
		$('.slideshow').html('&nbsp;');
		$('body').addClass('background-cover');
	
	}
	
	viewportSetTitle(viewport, thisviewport);

}
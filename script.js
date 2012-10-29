
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
	
		// home page slideshow
		$('.slideshow').html('<img src="http://placekitten.com/g/825/508" alt="aww">');		
		$('body.home').removeClass('background-cover');
		

		$('.dropclickmenu:not(.dropclickedmenu)').each(function() {
		
			$(this).append('<div class="dropclickmenu-display"></div>');
			$(this).children('.dropclick').addClass('dropclick-in-menu');
			$(this).addClass('dropclickedmenu');
			
		});

		$('.dropclick:not(.dropclicked)').each(function() {
		
			// trick this out into a slick little drop down menu
			
			$(this).children().wrapAll('<div class="dropclick-items"></div>');
			
			var id = $(this).attr('id');
			if (!id) { id = "some-menu"; }
			var label = id.replace("-", " ");
			label = label.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
			    return $1.toUpperCase();
			});
			$(this).prepend('<div class="dropclick-menu">' + label + '</div>');
			
			if ($(this).hasClass('dropclick-in-menu')) {
				$(this).children('.dropclick-menu').on('click', function() {

					var disp = $(this).parent().siblings('.dropclickmenu-display');
				
					if ($(this).parent().hasClass('open')) {
						$(this).parent().removeClass('open');
						disp.slideUp('fast').html("&nbsp;");
					} else {
						$(this).parent().siblings('.dropclicked').removeClass('open');
						$(this).parent().addClass('open');
						var items = $(this).siblings('.dropclick-items').clone();						
						disp.slideUp('fast', function() {
							$(this).html(items).slideDown();
						});
					}
					
				});
			} else {
				$(this).children('.dropclick-menu').on('click', function() {
					$(this).siblings('.dropclick-items').slideToggle();
				});
			}
			
			$(this).addClass('dropclicked');
			
		});
	
	} else if (thisviewport == "l") {
	
		// home page slideshow
		$('.slideshow').html('&nbsp;');
		$('body.home').addClass('background-cover');
		
		undropclick();
		
	}
	
	viewportSetTitle(viewport, thisviewport);

}

function undropclick() {

	$('.dropclickedmenu').removeClass('dropclickedmenu');
	$('.dropclickmenu-display').remove();
	
	$('.dropclicked').each(function() {
	
		$(this).children('.dropclick-menu').remove();
		$(this).removeClass('dropclicked').removeClass('dropclicked-in-menu');
	
	});
}
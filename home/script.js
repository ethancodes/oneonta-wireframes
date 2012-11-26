
/**
 * do stuff for small
 */
function viewportGo_s() {
	// home page slideshow
	$('.slideshow').html('<img src="/images/walkway.jpg" alt="walkway">');		
	$('body.home').removeClass('background-cover');
	
	dropclick();
	
}

/**
 * do stuff for medium
 */
function viewportGo_m() {
	viewportGo_s();
}

/**
 * do stuff for large
 */
function viewportGo_l() {
	// home page slideshow
	$('.slideshow').html('&nbsp;');
	$('body.home').addClass('background-cover');
	
	undropclick();
}
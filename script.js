
var lastviewport = "";

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
		
	viewportSetTitle(viewport, thisviewport);
	
	if (thisviewport != lastviewport) {
		var fn = "viewportGo_" + thisviewport;
		if (function_exists(fn)) call_user_func(fn.toString(), "");
		lastviewport = thisviewport;
	}

}


function dropclick() {
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
		var label = id.replace(/-/g, " ");
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
}

function undropclick() {

	$('.dropclickedmenu').removeClass('dropclickedmenu');
	$('.dropclickmenu-display').remove();
	
	$('.dropclicked').each(function() {
	
		$(this).children('.dropclick-menu').remove();
		$(this).removeClass('dropclicked').removeClass('dropclicked-in-menu');
	
	});
}

function function_exists (func_name) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Steve Clay
  // +   improved by: Legaev Andrey
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: function_exists('isFinite');
  // *     returns 1: true

  if (typeof func_name === 'string') {
    func_name = this.window[func_name];
  }
  return typeof func_name === 'function';
}

function call_user_func (cb) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // +   improved by: Diplom@t (http://difane.com/)
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: call_user_func('isNaN', 'a');
  // *     returns 1: true
  var func;

  if (typeof cb === 'string') {
    func = (typeof this[cb] === 'function') ? this[cb] : func = (new Function(null, 'return ' + cb))();
  }
  else if (Object.prototype.toString.call(cb) === '[object Array]') {
    func = (typeof cb[0] == 'string') ? eval(cb[0] + "['" + cb[1] + "']") : func = cb[0][cb[1]];
  }
  else if (typeof cb === 'function') {
    func = cb;
  }

  if (typeof func != 'function') {
    throw new Error(func + ' is not a valid function');
  }

  var parameters = Array.prototype.slice.call(arguments, 1);
//  return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters) : (typeof cb[0] !== 'object') ? func.apply(null, parameters) : func.apply(cb[0], parameters);
  return func.apply(eval(cb), parameters);
}


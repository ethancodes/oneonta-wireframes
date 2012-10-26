<?php

/**
 * @file
 * wireframe functions
 */

/**
 * load a component
 * will look for components/$component.php
 * make sure that file actually exists
 * and include it
 *
 * @param string $component
 * @param boolean $wrapper wrap in a nice -wrapper div?
 */ 
function get_component($component, $wrapper = true) {

	$filename = 'components/' . $component . '.php';
	if (file_exists($filename)) {
		if ($wrapper) echo '<div class="' . $component . '-wrapper">';
		include $filename;
		if ($wrapper) echo '</div>';
	} else {
		$filename = 'components/' . $component . '.html';
		if (file_exists($filename)) {
			if ($wrapper) echo '<div class="' . $component . '-wrapper">';
			include $filename;
			if ($wrapper) echo '</div>';
		}
	}

}


/**
 * get the name of this page from the filename
 * will default to home
 *
 * @param boolean $makepretty
 */
function get_title($makepretty = false) {

	$f = end(explode("/", $_SERVER['REQUEST_URI']));
	if ($f != '' && $f != $_SERVER['HTTP_HOST']) {
		$f = str_replace(".php", "", $f);
	} else {
		$f = 'home';
	}
	
	if ($makepretty) $f = ucwords(str_replace("_", " ", $f));

	return $f;
}
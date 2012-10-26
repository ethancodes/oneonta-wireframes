<?php

/**
 * @file
 * header template file
 */
 
require_once 'functions.php';

$f = get_title();
$fpretty = get_title(true);
$body_classes = array($f);

?><!DOCTYPE html>
<html>
<head>
<title>SUNY Oneonta Wireframes<?php if ($fpretty != '') echo ': ' . $fpretty; ?></title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="style-s.css" media="screen and (min-width: 240px) and (max-width: 559px)">
<link rel="stylesheet" href="style-m.css" media="screen and (min-width: 560px) and (max-width: 959px)">
<link rel="stylesheet" href="style-l.css" media="screen and (min-width: 960px)">
<?php if (file_exists('style-' . $f . '.css')): ?><link rel="stylesheet" href="style-<?php echo $f; ?>.css"><?php endif; ?>

<script src="jquery.js"></script>
<script src="script.js"></script>
</head>
<body class="<?php echo implode(' ', $body_classes); ?>">

<div id="wrapper">

	<?php get_component('emergencies'); ?>
	
	<?php get_component('logo'); ?>
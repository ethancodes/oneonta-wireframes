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
<html lang="en">
<head>
<meta charset="utf-8">
<title>SUNY Oneonta Wireframes<?php if ($fpretty != '') echo ': ' . $fpretty; ?></title>

<!-- http://t.co/dKP3o1e -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- default stylesheets -->
<link rel="stylesheet" href="../style.css">
<link rel="stylesheet" href="../style-s.css" media="screen and (min-width: 240px) and (max-width: 559px)">
<link rel="stylesheet" href="../style-m.css" media="screen and (min-width: 560px) and (max-width: 959px)">
<link rel="stylesheet" href="../style-l.css" media="screen and (min-width: 960px)">

<!-- overrides for this page -->
<?php if (file_exists('style.css')): ?><link rel="stylesheet" href="style.css"><?php endif; ?>
<?php if (file_exists('style-s.css')): ?><link rel="stylesheet" href="style-s.css" media="screen and (min-width: 240px) and (max-width: 559px)"><?php endif; ?>
<?php if (file_exists('style-m.css')): ?><link rel="stylesheet" href="style-m.css" media="screen and (min-width: 560px) and (max-width: 959px)"><?php endif; ?>
<?php if (file_exists('style-l.css')): ?><link rel="stylesheet" href="style-l.css" media="screen and (min-width: 960px)"><?php endif; ?>

<!-- javascript -->
<script src="../jquery.js"></script>
<script src="../script.js"></script>
<?php if (file_exists('script.js')): ?><script src="script.js"></script><?php endif; ?>

</head>
<body class="<?php echo implode(' ', $body_classes); ?>">

<div id="wrapper">

	<?php get_component('emergencies'); ?>
	
	<?php get_component('logo'); ?>
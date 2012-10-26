<?php include 'header.php'; ?>

	<div class="menu-1 menu-1a-wrapper graybox">
		<?php get_component('audience-nav'); ?>
		<?php get_component('search'); ?>
	</div>
	
	<div class="menu-1 menu-1b-wrapper graybox">
		<div class="main-nav-wrapper clearfix"><?php get_component('main-nav', false); ?></div>
	</div>
	
	<div class="menu-2 graybox dropclick" id="main-menu">
		<?php get_component('search'); ?>

		<div class="menu-2b-wrapper clearfix">
			<?php get_component('main-nav'); ?>
			<?php get_component('audience-nav'); ?>
		</div>
		
	</div>
	
	<?php get_component('slideshow2'); ?>
	
	<div class="main-content-wrapper">
	<p>Skate ipsum dolor sit amet, death box coper helipop front foot impossible gnarly. Gap hang ten rails indy grab 50-50. Eight Dayz pop shove-it Japan air sponsored yeah bank. 720 nose blunt hanger birdie 540. Fast plant heel flip skate or die Tracker casper. Slob air ollie frontside griptape aerial. Hardware nose blunt mongo rail salad grind. Grab slap maxwell downhill snake crailtap. Pop shove-it crailtap Mike York nose bump transfer gap. Cab flip 540 vert crail slide fastplant Kien Lieu. Hand rail chicken wing helipop stoked shinner. Cab flip Rune Glifberg switch hurricane face plant pop shove-it. Stoked pogo full-cab grind pop shove-it. </p>
	</div>
	
	<?php get_component('recent-posts'); ?>
	
	<?php get_component('featured-video'); ?>
	
	<div class="action-wrapper">
		<?php get_component('applynow'); ?>
		<?php get_component('open-house'); ?>
		<?php get_component('app-stores'); ?>
		<?php get_component('accolades'); ?>
		<?php get_component('college-portrait'); ?>
	</div>


<?php include 'footer.php'; ?>
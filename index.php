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
		
		<div class="keylinks-wrapper clearfix"><?php get_component('keylinks', false); ?></div>

	</div>
	
	<?php get_component('slideshow'); ?>
	
	<?php get_component('lg'); ?>
	
	<?php get_component('featured-video'); ?>
	
	<div class="action-wrapper">
		<?php get_component('applynow'); ?>
		<?php get_component('keylinks'); ?>
	</div>


<?php include 'footer.php'; ?>
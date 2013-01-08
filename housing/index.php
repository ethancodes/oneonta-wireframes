<?php include '../header.php'; ?>

	<div class="menu-1 menu-1a-wrapper graybox">
		<?php get_component('audience-nav'); ?>
		<?php get_component('search'); ?>
	</div>
	
	<div class="menu-1 menu-1b-wrapper graybox">
		<div class="main-nav-wrapper clearfix"><?php get_component('main-nav', false); ?></div>
	</div>
	
	<div class="menu-wrapper dropclickmenu">
		<div class="menu-2 graybox dropclick fullwidth" id="main-menu">
			<?php get_component('search'); ?>
	
			<div class="menu-2b-wrapper clearfix">
				<?php get_component('main-nav'); ?>
				<?php get_component('audience-nav'); ?>
			</div>
			
		</div>
	
		<div class="menu-3 graybox dropclick fullwidth" id="housing-menu">
			<?php get_component('housing-nav'); ?>
			<?php get_component('reslife-keylinks'); ?>
		</div>

		<?php get_component('breadcrumb'); ?>			
	</div>

	<?php get_component('breadcrumb'); ?>			
	
	<div class="layout-wrapper">
	
		<div class="sublayout-wrapper">
		
			<div class="main-content-wrapper">
			<h1>Housing Options</h1>
			<p>This page shown only to illustrate how sub-navigation works on the 4th level page.</p>
			</div>
			
		</div>
					
	</div>


<?php include '../footer.php'; ?>
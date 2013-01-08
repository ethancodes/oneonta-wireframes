<?php
$breadcrumb = array('Home', 'Admissions');
if (get_title() == 'eop') $breadcrumb[] = 'Educational Opportunity Program';

if (get_title() == 'reslife' || get_title() == 'housing') {
	$breadcrumb = array('Home', 'Student Life', 'Residence Life &amp; Housing');
}
if (get_title() == 'housing') $breadcrumb[] = 'Housing Options';

$crumbs = array();
foreach ($breadcrumb as $j => $bc) {
	$crumb = '<div class="breadcrumb';
	if ($j == 0) $crumb .= ' first';
	if ($j == count($breadcrumb) - 1) $crumb .= ' last';
	$crumb .= '"><a href="#">' . $bc . '</a></div>';
	$crumbs[] = $crumb;
}

echo implode(' / ', $crumbs);
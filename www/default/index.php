<?php
/**
 * If a custom dashboard file exists, load that instead of the default
 * dashboard provided by Varying Vagrant Vagrants. This file should be
 * located in the `www/default/` directory.
 */
if ( file_exists( 'dashboard-custom.php' ) ) {
	include( 'dashboard-custom.php' );
	exit;
}

// Begin default dashboard.
?>
<!DOCTYPE html>
<html>
<head>
	<title>Varying Vagrant Vagrants Dashboard</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h2>Supporting Players</h2>

<ul class="nav">
	<li class="active"><a href="#">Home</a></li>
	<li><a href="database-admin/">phpMyAdmin</a></li>
	<li><a href="memcached-admin/">phpMemcachedAdmin</a></li>
	<li><a href="opcache-status/opcache.php">Opcache Status</a></li>
	<li><a href="webgrind/">Webgrind</a></li>
	<li><a href="phpinfo/">PHP Info</a></li>
	<li><a href="prototype/index.html">Static Prototype</a></li>
</ul>

<h2>WordPress</h2>

<ul class="nav">
	<li><a href="http://localhost:8888/">http://localhost:8888</a></li>
</ul>
</body>
</html>

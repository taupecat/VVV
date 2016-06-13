/**
 * Establish our gulp/node plugins for this project.
 * We're keeping it _extremely_ minimal. A real-life
 * gulpfile would never be this bare bones.
 */
var gulp			= require('gulp'),
	sass			= require('gulp-ruby-sass'),
	theme_name		= '',
	theme_dir		= __dirname + '/www/wordpress-default/wp-content/themes/' + theme_name,
	sass_dir		= theme_dir + '/sass';

/**
 * Build a task to compile our Sass into CSS
 */
gulp.task('styles', function() {
	return sass( sass_dir + '/style.scss' )
		.on( 'error', function( err ) {
			console.error( 'Error!', err.message )
		})
		.pipe( gulp.dest( theme_dir ) );
});


/**
 * Same thing as above, but for our static prototype
 */
gulp.task('styles-prototype', function() {
	return sass( __dirname + '/www/default/prototype/sass/style.scss' )
		.on( 'error', function( err ) {
			console.error( 'Error!', err.message )
		})
		.pipe( gulp.dest( __dirname + '/www/default/prototype' ) );
});


/**
 * As there is only one task, the default task only references the "styles" task
 */
gulp.task('default', function() {
	gulp.start('styles');
	gulp.start('styles-prototype');
});


/**
 * Watch our Sass files, and do things when they change.
 */
gulp.task('watch', function() {
	gulp.watch( sass_dir + '/**/*.scss', ['styles'] );
	gulp.watch( __dirname + '/www/default/prototype/sass/**/*.scss', ['styles-prototype'] );
});

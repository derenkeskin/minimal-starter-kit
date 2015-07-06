var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../../config').browsersync;

// Start a development server with BrowserSync
gulp.task('browser-sync', function() {
  browserSync(config.dev);
});

// Start a production server with BrowserSync
gulp.task('browser-sync:prod', function() {
  browserSync(config.prod);
});

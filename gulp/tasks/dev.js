var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

// Build project in dist folder for development and watch it
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    ['bower', 'scripts', config.css.preprocessor, 'images', 'inject'],
    'jade',
    'watch',
    callback
  );
});

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

// build project in dist folder for production
gulp.task('prod', function(callback) {
  runSequence(
    'clean',
    ['bower', config.js.preprocessor, config.css.preprocessor, 'images', 'inject'],
    ['jade', 'html'],
    'browser-sync:prod',
    callback
  )
});

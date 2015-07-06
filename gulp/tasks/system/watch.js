var gulp   = require('gulp');
var config = require('../../config');

// Start browsersync task and then watch files for changes
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.watch[config.css.preprocessor], [config.css.preprocessor]);
  gulp.watch(config.watch.scripts,    ['scripts']);
  gulp.watch(config.watch.images,     ['images']);
  gulp.watch(config.watch.jade,       ['jade']);
});

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../../config').js;

// Copy js files to build path
gulp.task('javascript', function() {
  return gulp.src(config.javascript.src)
    .pipe(gulp.dest(config.javascript.dest))
    .pipe(browserSync.reload({stream:true}));
});

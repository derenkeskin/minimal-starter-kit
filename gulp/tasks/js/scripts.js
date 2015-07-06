var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../../config').scripts;

// Copy js files to build path
gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

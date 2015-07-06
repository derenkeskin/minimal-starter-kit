var gulp         = require('gulp');
var jade         = require('gulp-jade');
var browserSync  = require('browser-sync');
var config       = require('../../config').jade;

// Compile Jade templates
gulp.task('jade', function() {
  browserSync.notify('Compiling Jade...');

  return gulp.src(config.src)
    .pipe(jade(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

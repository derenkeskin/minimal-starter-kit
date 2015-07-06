var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var config       = require('../../config').css;

// Compile Stylus
gulp.task('stylus', function() {
  browserSync.notify('Compiling Stylus...');

  return gulp.src(config.stylus.src)
    .pipe(stylus())
    // Prefix CSS
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.stylus.dest))
    .pipe(browserSync.reload({stream:true}));
});

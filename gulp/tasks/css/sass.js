var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var config       = require('../../config').css;

// Compile Sass
gulp.task('sass', function() {
  browserSync.notify('Compiling Sass...');

  return sass(config.sass.src, config.sass.options)
    // Prefix CSS
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream:true}));
});

var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');
var browserSync  = require('browser-sync');
var config       = require('../../config').images;

// Compress Images
gulp.task('images', function() {
  browserSync.notify('Compressing new image...');

  return gulp.src(config.src)
    // Only new or changed images will be compressed
    .pipe(cache(imagemin(config.options)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

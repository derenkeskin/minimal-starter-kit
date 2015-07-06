var gulp       = require('gulp');
var useref     = require('gulp-useref');
var gulpif     = require('gulp-if');
var uglify     = require('gulp-uglify');
var minifyCss  = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');

// Optimization
gulp.task('html', ['jade'], function () {
  var assets = useref.assets({searchPath: ['build', '.']});

  return gulp.src('build/*.html')
    .pipe(assets)
    // Concatenate and minify JavaScript
    .pipe(gulpif('*.js', uglify()))
    // Concatenate and minify styles
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    // Minify any HTML files
    .pipe(gulpif('*.html', minifyHtml()))
    .pipe(gulp.dest('build'));
});

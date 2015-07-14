var gulp         = require('gulp');
var coffee       = require('gulp-coffee');
var browserSync  = require('browser-sync');
var config       = require('../../config').js;

// Compile all coffeescript files into js
gulp.task('coffeescript', function() {
  return gulp.src(config.coffeescript.src)
    .pipe(coffee())
    .pipe(gulp.dest(config.coffeescript.dest))
    .pipe(browserSync.reload({stream:true}));
});

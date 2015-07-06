var gulp         = require('gulp');
var inject       = require('gulp-inject');
var es           = require('event-stream');
var bower        = require('main-bower-files');
var browserSync  = require('browser-sync');
var config       = require('../../config');

// Inject bower packages, compiled styles and scripts
gulp.task('inject', ['bower', 'scripts', config.css.preprocessor], function () {
  return gulp.src(config.inject.layoutSrc)
    .pipe(inject(gulp.src(bower(), {read: false}), {name: 'bower', relative: true, ignorePath: '../'}))
    .pipe(inject(es.merge(
      gulp.src(config.inject.styles , {read: false}),
      gulp.src(config.inject.scripts, {read: false})), {
        ignorePath: ['/build']
      }))
    .pipe(gulp.dest(config.inject.layoutDest))
    .pipe(browserSync.reload({stream:true}));
});

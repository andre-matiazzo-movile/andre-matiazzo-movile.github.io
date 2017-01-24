'use strict';

// Include gulp
var gulp = require('gulp');

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('stylesheets/main.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);
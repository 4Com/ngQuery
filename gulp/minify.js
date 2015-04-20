/**
 * These tasks will minify all files
 *
 * Author:  Ben Gale
 * Date: 20 Apr 2015
 **/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task("uglify", ['bundle-js', 'bundle-templates'], function () {
  return gulp.src('./build/**/*.js')
    .pipe($.uglify())
    .pipe($.concat('ngQuery.min.js'))
    .pipe($.size())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task("minify-css", ['bundle-sass'], function () {
  return gulp.src('./build/css/*.css')
    .pipe($.concat('ngQuery.min.css'))
    .pipe(minifyCSS({
      keepBreaks: false
    }))
    .pipe($.size())
    .pipe(gulp.dest('./build/css/'));
});
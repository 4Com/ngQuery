/**
 * These tasks will create the dist directory
 *
 * Author:  Ben Gale
 * Date: 20 Apr 2015
 **/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var distributionFiles = [
  './build/js/ngQuery.js',
  './build/js/ngQuery.min.js',
  './build/css/ngQuery.min.css'
];

gulp.task("dist", ['uglify'], function () {
  return gulp.src(distributionFiles)
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

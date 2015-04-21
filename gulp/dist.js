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
  './build/css/ngQuery.min.css',
  './build/js/vendor.js',
  './LICENSE.md',
  './README.md'
];

var sampleFiles = [
  './dist/ngQuery.min.js',
  './dist/ngQuery.min.css',
  './dist/vendor.js'
];

gulp.task("dist", ['uglify', 'vendor'], function () {
  gulp.src(distributionFiles)
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));

  gulp.src(distributionFiles)
    .pipe($.size())
    .pipe(gulp.dest('./dist/sample/'));
});
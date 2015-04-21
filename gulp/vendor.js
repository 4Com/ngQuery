/**
 * These tasks will grab all of the vendor libraries and
 * concatenate them into a single file.
 *
 * Author:  Ben Gale
 * Date:    21 April 2015
 **/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var vendorDependencies = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/jquery-ui/jquery-ui.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-sortable/sortable.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
];
var outputPath = './build/js';
var outputFileName = 'vendor.js';

gulp.task("vendor", function () {
  return gulp.src(vendorDependencies)
    .pipe($.concat(outputFileName))
    .pipe($.size())
    .pipe(gulp.dest(outputPath));
});
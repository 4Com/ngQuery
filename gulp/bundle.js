/**
 * These tasks will grab all of the app libraries and
 * concatenate them into a single file.
 *
 * Author:  Ben Gale
 * Date: 17 Apr 2015
 **/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var minifyCSS = require('gulp-minify-css');

var appDependencies = [
  'js/ngQuery.js',
  'js/factories/queryOptionsFactory.js',
  'js/ngQueryConfig.js',
  'js/directives/queryBuilderDirective.js',
  'js/controllers/queryBuilderController.js',
  'js/directives/ruleDirective/ruleDirective.js',
  'js/directives/ruleDirective/ruleDirectiveController.js',
  'js/directives/ruleGroupDirective/ruleGroupDirectiveController.js',
  'js/directives/ruleGroupDirective/ruleGroupDirective.js',
  'js/factories/queryRepositoryFactory.js',
  'js/widgets/saveModal/saveModalController.js'
];

var outputPath = 'dist/';
var outputFileName = 'ngQuery.js';
var outputFileNameMin = 'ngQuery.min.js';

gulp.task("bundle", function () {
  return gulp.src(appDependencies)
    .pipe($.concat(outputFileName))
    .pipe($.size())
    .pipe(gulp.dest(outputPath));
});

gulp.task("uglify", function () {
  return gulp.src(appDependencies)
    .pipe($.uglify())
    .pipe($.concat(outputFileNameMin))
    .pipe($.size())
    .pipe(gulp.dest(outputPath));
});

gulp.task("minify-css", function () {
  return gulp.src('./styles/css/*.css')
    .pipe($.concat('ngQuery.css'))
    .pipe(minifyCSS({
      keepBreaks: false
    }))
    .pipe($.size())
    .pipe(gulp.dest(outputPath))
});
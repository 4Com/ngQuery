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

gulp.task("bundle-js", function () {
  return gulp.src(appDependencies)
    .pipe($.concat(outputFileName))
    .pipe($.size())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task("bundle-templates", function () {
  return gulp.src('js/**/*.html')
    .pipe($.angularTemplates({
      basePath: 'js/',
      module: 'ngQuery'
    }))
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('bundle-sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe($.sass())
    .pipe(gulp.dest('./build/css'));
});

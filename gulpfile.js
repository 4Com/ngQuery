/**
 * Author:  Ben Gale
 * Date:    17 Apr 2015
 **/

var gulp = require('gulp');

/**
 * Load all of the files in the gulp directory.
 * These files are going to have tasks grouped together.
 */
require('require-dir')('./gulp');

gulp.task('default', [], function () {
  gulp.run("dist");
});

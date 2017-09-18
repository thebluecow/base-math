'use strict';

const gulp  = require('gulp'),
     eslint = require('gulp-eslint');

// http://justinchmura.com/2016/06/28/eslint-using-gulp/
// using ESLint to lint code and provide feedback on issues
// see .eslintrc for rule configuration
gulp.task('lint', function () {
  return gulp.src('./*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', [ 'lint' ]);
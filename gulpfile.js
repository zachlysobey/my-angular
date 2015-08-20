'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', ['lint'], function() {
    console.log('running default gulp task');
});

gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

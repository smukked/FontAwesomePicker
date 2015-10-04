/// <binding BeforeBuild='copyLibs' ProjectOpened='watch-lessBundle' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat');

gulp.task('lessBundle', function () {
    return gulp.src('./_Styles/*.less')
      .pipe(less({
          paths: [path.join(__dirname)]
      }))
      .pipe(minifyCSS())
      .pipe(concat("bundle.css"))
      .pipe(gulp.dest('./Styles'));
});

gulp.task('copyLibs', function () {
    gulp.src(['./bower_components/angular/angular.min.js'])
        .pipe(gulp.dest('./Scripts'));
});


gulp.task('watch-lessBundle', function () {
    gulp.watch(['./_Styles/*.less'], ['lessBundle']);
});

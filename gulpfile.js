"use strict";

var gulp = require("gulp");
var eslint = require("gulp-eslint");
var config = require("eyeglass-dev-eslint");

gulp.task("lint", function() {
  return gulp.src(["*.js"])
      .pipe(eslint(config))
      .pipe(eslint.formatEach("stylish", process.stderr))
      .pipe(eslint.failOnError());
});

gulp.task("default", ["lint"]);

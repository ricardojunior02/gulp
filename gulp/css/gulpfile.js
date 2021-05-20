const gulp = require('gulp');
const sass = require('gulp-sass');
const uglyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

const series = gulp.series;

function sassGulp(cb){
  gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglyCss({
      "uglyComments": true
    }))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
  return cb()
}

function htmlGulp(cb){
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
  return cb()
}


exports.default = series(sassGulp, htmlGulp);
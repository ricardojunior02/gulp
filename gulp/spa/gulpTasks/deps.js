const gulp = require('gulp');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function depsCSS(){
  return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(uglifyCss({
      "uglyComments": true
    }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

function depsFonts(cb){
  return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('build/assets/fonts'))
}


module.exports = {
  depsCSS,
  depsFonts
}
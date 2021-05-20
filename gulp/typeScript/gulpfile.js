const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');
const series = gulp.series;

function transformTsToJs(cb){
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}

exports.default = series(transformTsToJs)
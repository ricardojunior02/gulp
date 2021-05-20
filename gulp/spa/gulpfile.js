const gulp = require('gulp');
const { appCSS, appHTML, appIMG, appJS} = require('./gulpTasks/app');
const { depsCSS, depsFonts} = require('./gulpTasks/deps');
const { monitorarArquvos, servidor} = require('./gulpTasks/servidor');

const series = gulp.series;
const parallel = gulp.parallel;

module.exports.default = series(
  parallel(
    series(appCSS, appHTML, appIMG, appJS),
    series(depsCSS, depsFonts),
  ),
  servidor,
  monitorarArquvos
)

const gulp = require('gulp');

const series = gulp.series;
const parallel = gulp.parallel;

const before = (cb) => {
  console.log('Task before')
  return cb()
}

function copy(cb){
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
  return cb();
}

const after = (cb) => {
  console.log('Task after')
  return cb()
}



module.exports.default = series(
  parallel(before, after),
  before,
  copy,
  after
);
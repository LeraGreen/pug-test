'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('serve', gulp.series('pug', function() {
  browserSync.init({
    server: 'build',
    port: 3000,
    startPath: 'index.html'
  });
  gulp.watch([
    'src/**/*.pug'
  ], gulp.series('pug', reloader));
}));

gulp.task('default',
  gulp.series('serve')
);

function reloader(done) {
  browserSync.reload();
  done();
}

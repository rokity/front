const gulp = require('gulp');
const vulcanize = require('gulp-vulcanize');

module.exports.vulcanize = () => {
  gulp.task('vulcanize', () => gulp.src(['static/components/*.html'])
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true,
      dest: 'static/dist/components',
    }))
    .pipe(gulp.dest('static/dist/components/')));

  // gulp.task('default', ['vulcanize']);
  gulp.start('vulcanize');
};


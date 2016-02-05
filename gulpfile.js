var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var eslint = require('gulp-eslint');

gulp.task('develop', ['test', 'watch']);

gulp.task('watch', function() {
    gulp.watch(['**/*.js','!node_modules/**'], ['test']);
});

gulp.task('test', ['eslint', 'jasmine']);

gulp.task('eslint', function() {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('jasmine', function () {
    return gulp.src('spec/**')
        .pipe(jasmine({
            verbose: true,
            includeStackTrace: true
        }));
});


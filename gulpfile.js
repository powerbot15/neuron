//var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['build-js','watch']);

gulp.task('build-js', function(){
    return gulp.src(
        [
            'src/*.es6'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/*.es6', ['build-js']);
});
// var gulp = require('gulp');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
// var rename = require("gulp-rename");
// var minify = require('gulp-minify');
//
// gulp.task('default', ['build-js','watch']);
//
// gulp.task('build-js', function(){
//     return gulp.src(
//         [
//             'src/*.es6'
//         ])
//         .pipe(babel({
//             presets: ['es2015'],
//             plugins: ["transform-es2015-modules-amd"]
//         }))
//         .pipe(rename(function (path) {
//             path.basename += ".es6"
//         }))
//         .pipe(gulp.dest('dist'));
// });
//
// gulp.task('watch', function(){
//     gulp.watch('src/*.es6', ['build-js']);
// });

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function compile(watch) {
    var bundler = watchify(browserify('./src/perceptron/demo-perceptron.es6', { debug: true }).transform(babel, {presets: ["es2015"]}));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('build.js'))
            .pipe(buffer())
            //.pipe(sourcemaps.init({ loadMaps: true }))
            //.pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('build'));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
            console.log('-> ready');
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);
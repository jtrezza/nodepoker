/*
 * Dependencias
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

/*
 * Configuración de la tarea 'demo'
 */
gulp.task('demo', function () {
    gulp.src('js/source/*.js')
        .pipe(concat('todo.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});

gulp.task('browserify', function() {
    return browserify('./source/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/js/build/'));
});
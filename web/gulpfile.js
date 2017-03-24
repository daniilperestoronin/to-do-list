var gulp = require('gulp');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');

var paths = {
    src: {
        script: './src/javascripts/**/*.js',
        styles: './src/stylesheets/**/*.sass',
    },
    build: {
        script: './build/javascripts/',
        styles: './build/stylesheets/',
    }
}

var pipes = {};
pipes.orderVendorScript = function () {
    return plugins.order(['jquery.js', 'angular.js']);
};
pipes.buildVendorScriptsDev = function () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest(paths.build.script + '/bower_components'));
};

gulp.task('build:js', function () {
    return gulp.src(paths.src.script)
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.build.script));
});

gulp.task('build:sass', function () {
    gulp.src(paths.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.build.styles));
});

gulp.task('build', [
    'build:js',
    'build:sass'
]);
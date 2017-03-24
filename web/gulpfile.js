var gulp = require('gulp');
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


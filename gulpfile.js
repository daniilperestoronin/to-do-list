var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');

var paths = {
    script: './public/javascript/**/*.js',
    styles: './public/stylesheets/**/*.sass',
    distDev: './dist.dev',
    distProd: './dist.prod'
}

var pipes = {};
pipes.orderVendorScript = function () {
    return plugins.order(['jquery.js', 'angular.js']);
};
pipes.buildVendorScriptsDev = function () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest(paths.distDev + '/bower_components'));
};
pipes.buildAppScriptsDev = function () {
    return gulp.src(paths.scripts)
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.distDev));
};

gulp.task('build-app-scripts-dev', pipes.builtAppScriptsDev);

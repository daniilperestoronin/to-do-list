var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plugins = require('gulp-load-plugins')(),
    bowerFiles = require('main-bower-files'),
    runSequence = require('run-sequence'),

    paths = {
        src: {
            script: './src/javascripts/**/*.js',
            styles: './src/stylesheets/**/*.sass',
        },
        build: {
            build: './build/',
            script: './build/javascripts/',
            styles: './build/stylesheets/',
        }
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

gulp.task('index:index', function () {
    return gulp.src('./views/index.html')
        .pipe(plugins.inject(gulp.src(bowerFiles())
            .pipe(gulp
                .dest(paths.build.build + '/bower_files'))
            .pipe(plugins
                .order(['jquery.js', 'angular.js'])), {ignorePath: 'build', name: 'bower'}))
        .pipe(plugins
            .inject(gulp.src(['./build/javascripts/**/*.js', './build/stylesheets/**/*.css']), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('build', function () {
    runSequence(
        'build:sass',
        'build:js',
        'index:index'
    )
});
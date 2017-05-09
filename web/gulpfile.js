var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plugins = require('gulp-load-plugins')(),
    bowerFiles = require('main-bower-files'),
    runSequence = require('run-sequence'),
    angularOrder = require('gulp-angular-order'),

    paths = {
        src: {
            src: './src/',
            templates: './src/templates/**/*.html',
            index: './src/templates/index.html',
            script: './src/scripts/**/*.js',
            styles: './src/styles/**/*.sass',
        },
        build: {
            build: './build/',
            templates: './build/templates/',
            index: './build/templates/index.html',
            script: './build/scripts/',
            styles: './build/styles/',
        }
    };

gulp.task('build:js', function () {
    return gulp.src(paths.src.script)
        .pipe(angularOrder({
            types: ['module', 'service', 'controller', 'directive', 'filter', 'routes', 'config']
        }))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.build.script));
});

gulp.task('build:sass', function () {
    return gulp.src(paths.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.build.styles));
});

gulp.task('build:html', function () {
    return gulp.src(paths.src.templates)
        .pipe(gulp.dest(paths.build.templates));
});

gulp.task('index:index', function () {
    return gulp.src(paths.src.index)
        .pipe(plugins.inject(gulp.src(bowerFiles())
            .pipe(gulp
                .dest(paths.build.build + '/bower_files'))
            .pipe(plugins
                .order(['jquery.js', 'angular.js'])), {ignorePath: 'build', name: 'bower'}))
        .pipe(plugins
            .inject(gulp.src(['./build/scripts/**/*.js', './build/styles/**/*.css']), {ignorePath: 'build'}))
        .pipe(gulp.dest(paths.build.templates));
});


gulp.task('build', function () {
    runSequence(
        'build:sass',
        'build:js',
        'build:html',
        'index:index'
    )
});

gulp.task('watch:build_files', function () {
    gulp.watch([paths.src.script, paths.src.styles, paths.src.templates], ['build']);
});
var gulp = require('gulp');
var compass = require('gulp-compass');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

var app = './'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('img', function () {
    return gulp.src('./img/*.png')
        .pipe(gulp.dest('./dist/public/img'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('ejs', function () {
    return gulp.src('./views/*.ejs')
        .pipe(gulp.dest('./dist/views'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('partials', function () {
    return gulp.src('./partials/*.ejs')
        .pipe(gulp.dest('./dist/partials'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('app', function () {
    return gulp.src('./app.js')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:8080", // port of node server
    });
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './dist/app.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});

// gulp.task('watch', ['browserSync', 'ejs','partials', 'compass', 'img', 'server','nodemon'], function () {
//     gulp.watch('./sass/*.scss', ['compass'])
//     gulp.watch('./views/**/*.ejs', ['ejs'])
//     gulp.watch('./partials/**/*.ejs', ['partials'])
//     gulp.watch('./img/*.png', ['img'])
//     gulp.watch('./server.js', ['server']);
//     // Other watchers
// });

gulp.task('watch', ['browserSync', 'app', 'ejs','partials', 'sass', 'img'], function () {
    gulp.watch(["./app.js"], reload)
    gulp.watch(["./views/*.ejs"], reload)
    gulp.watch(["./sass/*.scss"], reload)
    gulp.watch(["./partials/*.ejs"], reload)
    gulp.watch(["./img/*.png"], reload);
});

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', function(){
    var assets = useref.assets();

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(uglify())
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:8080",
    });
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './app/app.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/app.js', browserSync.reload);
    gulp.watch('app/views/*.ejs', browserSync.reload);
})
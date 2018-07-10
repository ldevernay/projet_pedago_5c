var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
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

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // gulp.watch('app/*.html', browserSync.reload);
    // gulp.watch('app/js/**/*.js', browserSync.reload);
})
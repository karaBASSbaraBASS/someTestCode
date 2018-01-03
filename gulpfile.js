const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const gcmq = require('gulp-group-css-media-queries');
const pug = require('gulp-pug');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('buildCSS', function(){
    return gulp.src('resources/assets/sass/style.scss')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gcmq())
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'public/'
        }
    });
});
gulp.task('pug', function() {
  return gulp.src(['resources/views/pug/**/*.pug'])
      .pipe(pug({
          basedir: 'public/'
      }))
      .pipe(gulp.dest('public/'))
});

gulp.task('minifyJS', function () {
    gulp.src(['resources/assets/js/tether.js', 'resources/assets/js/dropzone-amd-module.js', 'resources/assets/js/popper.js', 'resources/assets/js/select2.min.js', 'resources/assets/js/jquery.validate.min.js', 'resources/assets/js/owl.carousel.js', 'resources/assets/js/script.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js/'));
}); 

gulp.task('watch', [ 'buildCSS', 'minifyJS', 'pug', 'browserSync'], function() {
    gulp.watch('resources/assets/sass/*.scss', ['buildCSS']); // Наблюдение за sass файлами
    gulp.watch('public/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('resources/views/**/*.pug',['pug']);
    gulp.watch('resources/assets/js/**/*.js', ['minifyJS']); // Наблюдение за JS файлами в папке js
});
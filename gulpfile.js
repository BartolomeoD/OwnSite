var gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    stylus = require('gulp-stylus'), // Плагин для Stylus
    livereload = require('gulp-livereload'), // Livereload для Gulp
    myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./assets/styles/**/*.scss')
        .pipe(sass().on('error', console.log))
        .pipe(gulp.dest('./public/css'))
});


// Собираем JS
gulp.task('js', function () {
    gulp.src('./assets/scripts/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./public/js'))
});



// Копируем и минимизируем изображения

gulp.task('images', function () {
    gulp.src('./assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'))
});

gulp.task('fonts', function () {
    gulp.src('./assets/fonts/*')
        .pipe(gulp.dest('./public/fonts/'))
})


gulp.task('watch', function () {
    // Предварительная сборка проекта

    gulp.watch('./assets/js/**/*.js', ['js']);
    gulp.watch('./assets/styles/**/*.scss', ['sass']);
    gulp.watch('./assets/images/**/*', ['images']);
});

gulp.task('build', function () {
    // css
    gulp.src('./assets/styles/**/*.scss')
        .pipe(sass().on('error', console.log))
        .pipe(gulp.dest('./build/css'))
    // js
    gulp.src('./assets/scripts/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./build/js'))

    // image
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))

    gulp.src('./assets/fonts/*')
        .pipe(gulp.dest('./build/fonts/'))

});
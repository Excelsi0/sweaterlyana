const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

// задача аля watch sass
gulp.task('styles', function () {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({
        prefix: "",
        suffix: ".min",
        }))
        .pipe(autoprefixer({
			cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
})

// при изменнии файлов sass,html будет запускаться эта задача
gulp.task('watch', function () {
    // sass
    gulp.watch('src/sass/**/*.sass', gulp.parallel('styles'));
    // html
    gulp.watch('src/*.html').on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
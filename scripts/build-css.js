import gulp from 'gulp';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';

gulp.src([
    "./src/css/var.css",
    "./src/css/main.css",
    "./src/css/detail.css"
])
    .pipe(concat("index.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./public/css"))
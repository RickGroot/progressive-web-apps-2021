import gulp from 'gulp';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

gulp.src([
        "./src/css/var.css",
        "./src/css/main.css",
        "./src/css/detail.css"
    ])
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(concat("index.css"))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest("./public/css"))
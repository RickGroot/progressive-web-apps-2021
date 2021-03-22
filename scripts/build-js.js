import gulp from 'gulp';
import concat from 'gulp-concat';
import minify from 'gulp-minify';

gulp.src([
    "./src/scripts/client/sw-init.js",
    "./src/scripts/client/main.js"
])
    .pipe(concat("index.js"))
    .pipe(minify())
    .pipe(gulp.dest("./public/js"))
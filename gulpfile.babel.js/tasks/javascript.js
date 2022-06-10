import gulp from "gulp"

// Config
import path from "../config/path"
import app from "../config/app"

// Plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import size from "gulp-size"
import rename from "gulp-rename"
import babel from "gulp-babel"
import uglify from "gulp-uglify"
import webpack from "webpack-stream"
import concat from "gulp-concat"

// JavaScript processing
export default () => {
  gulp.src(path.javascript.libs, { sourcemaps: app.isDev})
    .pipe(concat('vendor.min.js'))
    .pipe(size({ title: 'vendor.min.js'}))
  .pipe(gulp.dest(path.javascript.dest))
  return gulp.src(path.javascript.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JavaScript",
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(size({ title: 'main.js'}))
  .pipe(gulp.dest(path.javascript.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(size({ title: 'main.min.js'}))
  .pipe(gulp.dest(path.javascript.dest, { sourcemaps: app.isDev }))
}
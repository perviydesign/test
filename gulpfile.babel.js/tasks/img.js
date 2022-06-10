import gulp from "gulp"

// Config
import path from "../config/path"
import app from "../config/app"

// Plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import imagemin from "gulp-imagemin"
import newer from "gulp-newer"
import gulpIf from "gulp-if"

// Image processing
export default () => {
  return gulp.src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Image",
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
  .pipe(gulp.dest(path.img.dest))
}
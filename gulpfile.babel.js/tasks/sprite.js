import gulp from "gulp"

// Config
import path from "../config/path"
import app from "../config/app"

// Plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import svgSprite from "gulp-svg-sprite"
import cheerio from "gulp-cheerio"
import replace from "gulp-replace"

// SVG Sprite processing
export default () => {
  return gulp.src(path.sprite.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Image",
        message: error.message
      }))
    }))
    .pipe(cheerio(app.cheerio))
    .pipe(replace("&gt;", ">"))
    .pipe(svgSprite(app.sprite))
  .pipe(gulp.dest(path.sprite.dest))
}
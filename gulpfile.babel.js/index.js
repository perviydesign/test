import gulp from "gulp"
import browserSync from "browser-sync"

// Config
import path from "./config/path.js"
import app from "./config/app.js"

// Tasks 
import clear from "./tasks/clear"
import html from "./tasks/html"
import css from "./tasks/css"
import scss from "./tasks/scss"
import javascript from "./tasks/javascript"
import img from "./tasks/img"
import sprite from "./tasks/sprite"
import fonts from "./tasks/fonts"

// Watcher
const watcher = () => {
  browserSync.init({
    tunnel: "langston",
    notify: false,
    server: {
      baseDir: path.root
    }
  })

  gulp.watch(path.html.watch, html).on("all", browserSync.reload)
  gulp.watch(path.css.watch, css).on("all", browserSync.reload)
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
  gulp.watch(path.javascript.watch, javascript).on("all", browserSync.reload)
  gulp.watch(path.img.watch, img).on("all", browserSync.reload)
  gulp.watch(path.sprite.watch, sprite).on("all", browserSync.reload)
}

const build = gulp.series(
  clear,
  gulp.parallel(html, img, sprite , scss, javascript, fonts),
);

const serve = gulp.series(
  build,
  watcher
);

export default app.isProd 
  ? build 
  : serve;
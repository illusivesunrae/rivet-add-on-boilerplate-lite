const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// Development server
function watchFiles(callback) {
  browserSync.init(["dist/css/**/*.css", "dist/js/**/*.js", "dist/**/*.html"], {
    server: {
      baseDir: "./dist"
    }
  });

  watch("src/sass/**/*.scss", { ignoreInitial: false }, compileSass);
  watch("src/js/**/*.js", { ignoreInitial: false }, compileJS);
  watch("src/index.html", { ignoreInitial: false }, compileHTML);
  callback();
}

function compileSass() {
  return src("src/sass/**/rivet-add-on-boilerplate-lite.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("dist/css/"))
    .pipe(browserSync.stream());
}

function compileJS() {
  return src("src/js/**/*.js")
    .pipe(dest("dist/js/"))
    .pipe(browserSync.stream());
}

function compileHTML() {
  return src("src/index.html")
    .pipe(dest("dist/"))
    .pipe(browserSync.stream());
}

// Default development task
exports.default = watchFiles;

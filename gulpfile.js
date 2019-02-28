const gulp = require("gulp");
const gutil = require("gulp-util");
const cp = require("child_process");
const sass = require("gulp-sass");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const externalHelpers = require("babel-plugin-external-helpers");
const browserSync = require("browser-sync").create();
const header = require("gulp-header");
const runSequence = require("run-sequence");
const uglify = require("gulp-uglify");
const pump = require("pump");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("autoprefixer");
const package = require("./package.json");

// Get the current year for copyright in the banner
const currentYear = new Date().getFullYear();

// Create the string for the verion number banner.
const banner = `/*! ${package.name} - @version ${package.version}

* Copyright (c) ${currentYear} TheTrustees of Indiana University

* Licensed under the BSD 3-Clause License.

* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*   1.Redistributions of source code must retain the above copyright notice,
*   this list of conditions and the following disclaimer.
*   2.Redistributions in binary form must reproduce the above copyright notice,
*   this list of conditions and the following disclaimer in the documentation
*   and/or other materials provided with the distribution.
*   3.Neither the name of the copyright holder nor the names of its
*   contributors may be used to endorse or promote products derived from
*   this software without specific prior written permission.
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

`;

// Development server
gulp.task("serve", function() {
  browserSync.init(["docs/css/**/*.css", "docs/js/**/*.js", "docs/**/*.html"], {
    server: {
      baseDir: "./docs"
    }
  });

  gulp.watch("src/sass/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["js"]);
});

gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("docs/css/"));
});

/**
 * Uses Rollup to compile ES6 down to browser JS with a UMD wrapper.
 * See more here:
 * https://rollupjs.org/guide/en#gulp
 */
gulp.task("js", () => {
  return rollup
    .rollup({ input: "./src/js/" + package.name + ".js", plugins: [babel()] })
    .then(bundle => {
      return bundle.write({
        file: "./docs/js/" + package.name + ".js",
        format: "umd",
        /**
         * Change this property to the namespace you want you're component
         * to have. For example "Widget". Then it's public methods should
         * be available as Widget.init().
         */
        name: "MyComponent",
        sourcemap: true
      });
    });
});

// Default development task
gulp.task("default", ["serve"]);

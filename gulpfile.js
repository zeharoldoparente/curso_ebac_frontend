const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function compilaImage() {
   return gulp
      .src("./source/images/*")
      .pipe(imagemin())
      .pipe(gulp.dest("./build/images"));
}

function comprimeJS() {
   return gulp
      .src("./source/scripts/*.js")
      .pipe(uglify())
      .pipe(obfuscate())
      .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
   return gulp
      .src("./source/styles/main.scss")
      .pipe(sourcemaps.init())
      .pipe(
         sass({
            outputStyle: "compressed",
         })
      )
      .pipe(sourcemaps.write("./maps"))
      .pipe(gulp.dest("./build/styles/"));
}

exports.default = function () {
   gulp.watch(
      "./source/styles/*.scss",
      { ignoreInitial: false },
      gulp.series(compilaSass)
   );
   gulp.watch(
      "./source/images/*",
      { ignoreInitial: false },
      gulp.series(compilaImage)
   );
   gulp.watch(
      "./source/scripts/*.js",
      { ignoreInitial: false },
      gulp.series(comprimeJS)
   );
};

// exports.default = gulp.series(funcaoPadrao, dizOi);
// exports.dizOi = dizOi;
// exports.default = gulp.parallel(funcaoPadrao, dizOi);
// exports.sass = compilaSass;

// exports.js = comprimeJS;
// exports.image = compilaImage;

// function funcaoPadrao(callback) {
//    setTimeout(function () {
//       console.log("Executando via Gulp");
//       callback();
//    }, 200);
// }

// function dizOi(callback) {
//    console.log("Olá Gulp!");
//    dizTchau();
//    callback();
// }

// function dizTchau() {
//    console.log("Tchau Gulp!");
// }

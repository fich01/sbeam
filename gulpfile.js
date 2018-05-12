const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
//const browserSync = require("browser-sync").create();
const evilIcons = require("gulp-evil-icons");
const gcmq = require("gulp-group-css-media-queries");

gulp.task("readyHTML", function(){
    gulp.src("./src/*.html")
        .pipe(evilIcons())
        .pipe(gulp.dest("./dist"))
        //.pipe(browserSync.stream());
});

gulp.task("cssReady", function(){
    gulp.src("./src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(gulp.dest("./dist/css"))
        //.pipe(browserSync.stream());
});

gulp.task("javascriptReady", function(){
    gulp.src("./src/js/**/*.js")
        //.pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
});

/*
// nes ne valja
gulp.task("browser-sync", function(){
    browserSync.init({
        files: ["./src/*.html"],
        server: {
            baseDir: "./dist",
            directory: true
        }
    });

    

    gulp.watch("./src/sass/**/ /* *.scss", ["cssReady"]);
    gulp.watch("./src/*.html", ["readyHTML"]); 
    gulp.watch("./src/*.html").on("change", browserSync.reload());
    gulp.watch("./src/js/**/ // *.js", ["javascriptReady"]);
    /* gulp.watch("./src/img/*", ["imageMin"]);
     /*
    
    
});

*/

gulp.task("imageMin", function(){
    gulp.src("./src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"))
        //.pipe(browserSync.stream());
});

//gulp.task("watch", function(){
 //   gulp.watch("./src/sass/**/*.scss", ["cssReady"]);
 //   gulp.watch("./src/*.html", ["readyHTML"]); 
 //   gulp.watch("./src/js/**/*.js", ["javascriptReady"]);
 //   gulp.watch("./src/img/*", ["imageMin"]);
//});


//sa watchom
//gulp.task("default", ["readyHTML", "cssReady", "javascriptReady", "imageMin", "watch"]);

//bez watcha - maknuto zbog netlify-ja
gulp.task("default", ["readyHTML", "cssReady", "javascriptReady", "imageMin"]);

//gulp.task("default", ["readyHTML", "cssReady", "javascriptReady", "imageMin", "browser-sync"]);


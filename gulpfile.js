var gulp = require('gulp');
var less = require("gulp-less");
var coffee = require('gulp-coffee');
var path = require("path");

gulp.task("default", buildTask);
gulp.task("build", buildTask);
gulp.task("less", lessTask);
gulp.task('coffee', coffeeTask);

function lessTask() {
 gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
}
function coffeeTask() {
    gulp.src('./coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./js'));
}
function buildTask() {
  lessTask();
  coffeeTask();
}
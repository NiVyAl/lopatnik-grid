var gulp = require("gulp");
var server = require("browser-sync").create();

gulp.task("server", function() {
  server.init({
    server: "source/",
    open: true,
    ui: false
  });
  
  gulp.watch("source/*.html", gulp.series("refresh"));
  gulp.watch("source/*.css", gulp.series("refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

export const jslang = () =>{
    return app.gulp.src(app.path.src.jslang)
        .pipe(app.gulp.dest(app.path.build.jslang))
}
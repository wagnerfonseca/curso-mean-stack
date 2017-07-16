const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function() {
    gulp.src([

    ])
    // diminui o tamanho dos arquivos
    .pipe(uglify())
    // colocar todas os arquivos dentro de um unico arquivo
    .pipe(concat('deps.min.js'))
    // e publica este arquivo
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {

})

gulp.task('deps.fonts', function() {

})
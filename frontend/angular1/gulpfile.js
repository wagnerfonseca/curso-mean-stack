const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTask/app')
require('./gulpTask/deps')
require('./gulpTask/server')

gulp.task('default', function(){
    if(util.env.production) {
        gulp.start('deps', 'app')
    } else {
        gulp.start('deps', 'app', 'server')
    }
})
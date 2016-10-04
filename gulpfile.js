var gulp        = require('gulp'),
    gUtil       = require('gulp-util'),
    coffee      = require('gulp-coffee'),
    browserify  = require('gulp-browserify'),
    concat      = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'],
    jsSources = [
        'components/scripts/rclick.js',
        'components/scripts/pixgrid.js',
        'components/scripts/tagline.js',
        'components/scripts/template.js'
    ];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({bare: true})
            .on('error', gUtil.log))
        .pipe(gulp.dest('components/scripts')
    )
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'));
});
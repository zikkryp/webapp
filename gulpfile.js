var _    = require('lodash'),
    gulp = require('gulp');

gulp.task('copy-assets', function() {
    var assets = {
        js: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js'
        ]
    };
    _(assets).forEach(function(asset, type) {
        gulp.src(asset).pipe(gulp.dest('./src/assets/libs/' + type));
    });
});

gulp.task('default', ['copy-assets']);

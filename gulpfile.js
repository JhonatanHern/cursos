var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug')

gulp.task('styles', function() {
	return gulp.src('sass/*.scss')
		.pipe(sass({'sourcemap=none': true}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('styles/'))
})

gulp.task('views', function buildHTML() {
	let obj = gulp.src('views/*.pug')
	obj.pipe(pug({doctype: 'html',pretty: false}))
	obj.pipe(gulp.dest('.'))
	return obj
})

gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['styles'])
	gulp.watch('views/*.pug'  , ['views' ])
})

gulp.task('default', ['views','styles'])
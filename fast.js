var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug')


let obj
obj = gulp.src('sass/*.scss')
obj.pipe(sass({'sourcemap=none': true}))
obj.pipe(concat('style.css'))
obj.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
obj.pipe(gulp.dest('styles/'))



obj2 = gulp.src('views/*.pug')
obj2.pipe(pug({doctype: 'html',pretty: false}))
obj2.pipe(gulp.dest('.'))

console.log('done')

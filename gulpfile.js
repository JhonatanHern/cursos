var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	counter = 0

function buildCSS() {
	console.log('buildCSS started')
	return gulp.src('sass/*.scss')
		.pipe(sass({'sourcemap=none': true}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('styles/'))
}

function buildHTML() {
	console.log('buildHTML started')
	return gulp.src('views/*.pug')
		.pipe(pug({doctype: 'html',pretty: false}))
		.pipe(gulp.dest('.'))
}

gulp.task( 'styles' , buildCSS )
gulp.task( 'views'  , buildHTML )

gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['styles'])
	gulp.watch('views/*.pug'  , ['views' ])
})

gulp.task('default', ['views','styles'])

var stdin = process.stdin
stdin.setRawMode( true )
stdin.resume()
stdin.setEncoding( 'utf8' )
var busy = false

stdin.on( 'data', function( key ){
	if (busy) {
		console.log('busy')
		return
	}
	busy = true
	// ctrl-c ( end of text )
	if ( key === '\u0003' ) {
		process.exit()
	}
	//process.stdout.write(' ')
	counter++
	console.log(counter + 'Tasks in progress')
	buildHTML()
	buildCSS()
	console.log('Tasks finished')
	busy = false
})
console.log('Gulpfile ready')
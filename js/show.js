(function() {
	let screen  = document.getElementById('form'),
		form    = document.getElementById('contact'),
		buttons = document.getElementsByClassName('form-trigger'),
		centerclick = false

	Array.from(buttons).forEach( e => {
		e.addEventListener('click', () => {
			screen.style.display = 'block'
		})
	})

	screen.addEventListener('click',function() {
		if( !centerclick )
			this.style.display = 'none'
		centerclick = false
	})

	form.addEventListener('click',function() {
		centerclick = true
	})
	/*
	form.addEventListener('submit',function(e) {
		e.preventDefault()
		let parameters = Array.from(this.querySelectorAll('input,textarea'))
			.filter( e => !!e.value )
			.map( e => encodeURIComponent(e.name)+'='+encodeURIComponent(e.value) )
			.join('&')
	})
	*/
})()
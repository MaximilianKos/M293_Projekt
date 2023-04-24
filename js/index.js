(function () {
	'use strict';
	const typed = document.querySelector('.typed');
	if (typed) {
		let typed_strings = typed.getAttribute('data-typed-items').split(',');
		new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 70,
			backSpeed: 30,
			backDelay: 2000,
		});
	}
})();

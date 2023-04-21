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

let selectedLink = document.querySelector('.selectedLink');

function checkActive() {
	document.querySelectorAll('nav li').forEach((item) => {
		if (item.dataset.active == 'true') {
			selectedLink.style.transform = `translateX(${item.offsetLeft + item.offsetWidth / 2 - 24 + 'px'})`;
		}
	});
}

document.querySelectorAll('nav li').forEach((item) => {
	item.addEventListener('click', (e) => {
		document.querySelectorAll('nav li').forEach((i) => {
			i.dataset.active = 'false';
		});
		e.currentTarget.dataset.active = 'true';
		checkActive();
	});
});

checkActive();

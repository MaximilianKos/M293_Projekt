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

function updateYear() {
	var year = new Date().getFullYear();
	var footer = document.querySelector('footer p');
	footer.textContent = '\u00A9 ' + year + ' Maximilian Kos';
}

updateYear();

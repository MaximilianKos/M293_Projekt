document.getElementById('sort-filter-select').addEventListener('change', function (event) {
	const selectedOption = event.target.value;

	if (selectedOption === 'date') {
		sortByDate();
	} else if (selectedOption === 'alphabetical') {
		sortAlphabetically();
	} else {
		filterProjectsByLanguage(selectedOption);
	}
});

function sortByDate() {
	const projectContainer = document.querySelector('.projects-grid');
	const projects = Array.from(projectContainer.children);

	projects.sort((a, b) => {
		const dateA = new Date(a.querySelector('#date').textContent.trim().split(' ').slice(-2).join(' '));
		const dateB = new Date(b.querySelector('#date').textContent.trim().split(' ').slice(-2).join(' '));
		return dateB - dateA;
	});

	projectContainer.innerHTML = '';
	projects.forEach((project) => projectContainer.appendChild(project));
}

function sortAlphabetically() {
	const projectContainer = document.querySelector('.projects-grid');
	const projects = Array.from(projectContainer.children);

	projects.sort((a, b) => {
		const titleA = a.querySelector('h3').textContent;
		const titleB = b.querySelector('h3').textContent;
		return titleA.localeCompare(titleB);
	});

	projectContainer.innerHTML = '';
	projects.forEach((project) => projectContainer.appendChild(project));
}

function filterProjectsByLanguage(language) {
	const projectContainer = document.querySelector('.projects-grid');
	const projects = Array.from(projectContainer.children);

	projects.forEach((project) => {
		const projectLanguagesString = project.getAttribute('data-languages');
		const projectLanguages = projectLanguagesString ? projectLanguagesString.split(', ') : [];

		const hasSelectedLanguage = projectLanguages.includes(language);
		project.style.display = hasSelectedLanguage || language === '' ? 'block' : 'none';
	});
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const projects = [
	{
		title: "Modal PopUp Application",
        description: "A modal popup is a small overlay that appears when triggered by an interactive element.",
 		image: "/img/modal-popup-app.png",
		technologies: ["Html", "CSS", "JavaScript"],
		type: "Web Application"
	},
	{
		title: "Palindrome Checker",
		description: "An interactive word verification tool that allows users to input and validate text. Features a clean, minimalist interface with real-time feedback.",
		image: "/img/palindrome-checker.png",
		technologies: ["Html", "CSS", "JavaScript"],
		type: "Utility Tool"
	},
	{
		title: "Cafe Menu System",
		description: "A digital menu system for Nessa360's Cafe, featuring a responsive design with dynamic pricing and category organization.",
		image: "/img/cafe-menu.png",
		technologies: ["HTML5", "CSS"],
		type: "Business Solution"
	},
	{
		title: "Image Search Engine",
		description: "A responsive image search interface with grid layout and filtering capabilities. Implements modern design principles with smooth animations.",
		image: "/img/image-search.png",
		technologies: ["Html", "CSS", "JavaScript", "API Integration"],
		type: "Search Tool"
	}
];

let currentIndex = 0;

// DOM elements
const projectImage = document.getElementById('projectImage');
const projectType = document.getElementById('projectType');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const techStack = document.getElementById('techStack');
const indicators = document.getElementById('indicators');

// Navigation buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function updateProject() {
	const project = projects[currentIndex];
	
	projectImage.src = project.image;
	projectImage.alt = project.title;
	projectType.textContent = project.type;
	projectTitle.textContent = project.title;
	projectDescription.textContent = project.description;
	
	// Update tech stack
	techStack.innerHTML = project.technologies
		.map(tech => `<span class="tech-tag">${tech}</span>`)
		.join('');
	
	// Update indicators
	const indicatorButtons = document.querySelectorAll('.indicator');
	indicatorButtons.forEach((button, index) => {
		button.classList.toggle('active', index === currentIndex);
	});
}

function nextProject() {
	currentIndex = (currentIndex + 1) % projects.length;
	updateProject();
}

function prevProject() {
	currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	updateProject();
}

// Create indicators
projects.forEach((_, index) => {
	const button = document.createElement('button');
	button.className = `indicator ${index === currentIndex ? 'active' : ''}`;
	button.addEventListener('click', () => {
		currentIndex = index;
		updateProject();
	});
	indicators.appendChild(button);
});

// Add event listeners
prevButton.addEventListener('click', prevProject);
nextButton.addEventListener('click', nextProject);

// Initialize first project
updateProject();
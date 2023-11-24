const mobileNav = document.querySelector('.nav-mobile__box');
const mobileNavBurgerBtn = document.querySelector('.burger-btn');
const mobileNavCloseBtn = document.querySelector('.nav-mobile__box-close-btn');
const mobileNavLinks = document.querySelectorAll('.link');
const allSections = document.querySelectorAll('.section');
const navBtnBars = document.querySelector('.burger-btn__bars');

const closeNav = () => {
	mobileNav.classList.remove('active');
	document.body.classList.remove('sticky-items');
};

const showNav = () => {
	mobileNav.classList.add('active');
	document.body.classList.add('sticky-items');

	mobileNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			closeNav();
		});
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars');
		} else if (!section.classList.contains('black-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars');
		}
	});
};

mobileNavBurgerBtn.addEventListener('click', showNav);
mobileNavCloseBtn.addEventListener('click', closeNav);
window.addEventListener('scroll', handleObserver);

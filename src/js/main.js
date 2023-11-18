const mobileNav = document.querySelector('.nav-mobile__box');
const mobileNavBurgerBtn = document.querySelector('.burger-btn');
const mobileNavCloseBtn = document.querySelector('.nav-mobile__box-close-btn');
const mobileNavLinks = document.querySelectorAll('.link');

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

// const handleMobileNav = () => {
//     mobileNav.classList.toggle('--active');

//     mobileNavLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             mobileNav.classList.remove('--active');
//         })
//     })
// }

mobileNavBurgerBtn.addEventListener('click', showNav);
mobileNavCloseBtn.addEventListener('click', closeNav);

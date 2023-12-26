const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorMessages = document.querySelectorAll('.error');
const btn = document.querySelector('.form__btn');

const arr = [userName, lastName, email, message];
let errorCounter;

const showError = (input, index, message) => {
	errorCounter++;
	errorMessages[index].textContent = message;
	input.classList.add('error-input');
	errorMessages[index].style.visibility = 'visible';
};

const clearError = (input, index) => {
	input.classList.remove('error-input');
	errorMessages[index].style.visibility = 'hidden';
};

const checkEmail = () => {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!regex.test(email.value)) {
		showError(email, arr.indexOf(email), 'Email jest błędny');
	} else {
		clearError(email, arr.indexOf(email));
	}
};

const checkInputs = e => {
	errorCounter = 0;
	e.preventDefault();

	arr.forEach((input, index) => {
		checkEmail();
		if (input.value === '') {
			const message = 'Pole jest puste!';
			showError(input, index, message);
		} else {
			clearError(input, index);
		}
	});

	if (errorCounter === 0) {
		console.log('Wszystko jest ok wiadomość wysłana');
	}
};

btn.addEventListener('click', checkInputs);

// checkInputs();

// jeżeli pole formularza jest puste ma zostać nadane na input klasa 'error-input' oraz ma pojawić się wiadomość pod inputem z klasą error

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('input');
const formTextarea = document.querySelector('textarea');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

recoveryUserData();

form.addEventListener('submit', throttle(onSubmit, 500));
form.addEventListener('input', throttle(onInput, 500));



function onInput(evt) {
  const user = evt.target;
  formData[user.name] = user.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function recoveryUserData() {
  const savedUserData = localStorage.getItem(STORAGE_KEY);
	const parsedUserData = JSON.parse(savedUserData);
	if (parsedUserData) {
		const email = parsedUserData.email;
	const message = parsedUserData.message;
	if (email) {
		formInput.value = email;
	} if (message) {
		formTextarea.value = message; 
	}
	}
	
}

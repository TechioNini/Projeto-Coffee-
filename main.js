const logregBox = document.querySelector('.logreg-box');
const registerLink = document.querySelector('.register-link');
const classBtn = document.querySelector('.btn');


classBtn.addEventListener('click', () => {
    logregBox.classList.add('active')
});

registerLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
});
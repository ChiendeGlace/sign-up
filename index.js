const confirmPassword = document.querySelector('#confirm-password');
const password = document.querySelector('#password');

const checkPassword = (e) => {
  if (password.value !== confirmPassword.value) {
    console.log('dogs')
    confirmPassword.classList.add('invalid');
  } else {
    confirmPassword.classList.remove('invalid');
  }
};

confirmPassword.addEventListener('input', checkPassword);

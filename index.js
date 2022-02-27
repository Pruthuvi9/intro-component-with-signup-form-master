const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {

  if (firstName.value === '') {
    e.preventDefault();
    document.getElementById('first-name-error').innerText = 'First Name cannot be empty';
    
    firstName.style['border-color'] = 'hsl(0, 100%, 74%)';
    firstName.style['border-width'] = '3px';

    document.getElementById('error-icon-firstname').className = 'material-icons-outlined md-24';
    document.getElementById('error-icon-firstname').innerText = 'error';
  }

  if (lastName.value === '') {
    e.preventDefault();
    document.getElementById('last-name-error').innerText = 'Last Name cannot be empty';

    lastName.style['border-color'] = 'hsl(0, 100%, 74%)';
    lastName.style['border-width'] = '3px';

    document.getElementById('error-icon-lastname').className = 'material-icons-outlined md-24';
    document.getElementById('error-icon-lastname').innerText = 'error';
  }

  if (/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(email.value) !== true) {
    e.preventDefault();
    document.getElementById('email-error').innerText = 'Looks like this is not an email';

    email.style['border-color'] = 'hsl(0, 100%, 74%)';
    email.style['border-width'] = '3px';

    document.getElementById('error-icon-email').className = 'material-icons-outlined md-24';
    document.getElementById('error-icon-email').innerText = 'error';
  }
  
  if (password.value === '') {
    e.preventDefault();
    document.getElementById('password-error').innerText = 'Password cannot be empty';

    password.style['border-color'] = 'hsl(0, 100%, 74%)';
    password.style['border-width'] = '3px';

    document.getElementById('error-icon-password').className = 'material-icons-outlined md-24';
    document.getElementById('error-icon-password').innerText = 'error';
  }

  if (messages.length > 0) {
    e.preventDefault();
    
  }
})

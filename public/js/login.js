const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.strinfigify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

const signUpFormHandler = async (event) => {
    event.preventDefault();

    const userSignUp = document.querySelector('#username-signup').value.trim();
    const passwordSignUp = document.querySelector('#password-signup').value.trim();

    if (userSignUp && passwordSignUp) {
        const response = await fetch('./api/users', {
            method: 'POST',
            body: JSON.strinfigy({ userSignUp, passwordSignUp }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-fomr')
    .addEventListener('submit', signUpFormHandler);
const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').nodeValue.trim();
    const password = document.querySelector('#password').nodeValue.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.strinfigify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    };

    const signUpFormHandler = async (event) => {
        event.preventDefault();

        const userSignUp = document.querySelector('#username-signup').nodeValue.trim();
        const passwordSignUp = document.querySelector('#password-signup').nodeValue.trim();

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
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-fomr')
    .addEventListener('submit', signUpFormHandler);
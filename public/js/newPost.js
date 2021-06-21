const posthandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const body = document.querySelector('#body-input').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.strinfigify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.newpost-form')
    .addEventListener('submit', posthandler);
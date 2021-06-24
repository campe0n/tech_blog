const commentHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const body = document.querySelector('#body-input').value.trim();

    if (title && body) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add comment');
        }
    }
}

document.querySelector('comment-form').addEventListener('submit', commentHandler);
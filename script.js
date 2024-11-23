document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
        const messages = document.getElementById('messages');
        messages.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        fetch('/api/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userInput }),
        })
            .then(response => response.json())
            .then(data => {
                messages.innerHTML += `<p><strong>Psysta:</strong> ${data.response}</p>`;
                document.getElementById('user-input').value = '';
            })
            .catch(err => console.error('Error:', err));
    }
});

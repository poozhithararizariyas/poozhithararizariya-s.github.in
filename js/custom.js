function showStyledWelcomeMessage() {
    // Create a div element for the message
    const messageDiv = document.createElement('div');

    // Add text to the message div
    messageDiv.textContent = "Welcome to my website!";

    // Apply styles to the message div
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.padding = '20px';
    messageDiv.style.backgroundColor = '#E32A62';
    messageDiv.style.color = '#ffff';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.border = '2px solid #000';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    messageDiv.style.zIndex = '1000';

    // Append the message div to the body
    document.body.appendChild(messageDiv);

    // Remove the message after 20 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 10000);
}

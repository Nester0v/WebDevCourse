document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form inputs
        const topic = document.getElementById('topic').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const agree = document.getElementById('agree').checked;

        // Reset previous error classes
        resetErrors();

        // Validate and display errors
        if (topic === '') {
            displayError('topic', 'Please enter a topic.');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayError('email', 'Please enter a valid email.');
        }

        const phonePattern = /^\d{3}-\d{2}-\d{3}$/;
        if (!phonePattern.test(phone)) {
            displayError('phone', 'Please enter a valid phone number (e.g., 123-45-678).');
        }

        if (!agree) {
            displayError('agree', 'Please agree to the terms.');
        }
    });

    function displayError(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
        const errorLabel = document.createElement('span');
        errorLabel.classList.add('error-message');
        errorLabel.textContent = errorMessage;
        field.parentNode.appendChild(errorLabel);
    }

    function resetErrors() {
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
            const errorLabel = field.parentNode.querySelector('.error-message');
            if (errorLabel) {
                field.parentNode.removeChild(errorLabel);
            }
        });
    }
});

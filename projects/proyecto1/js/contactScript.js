// JavaScript for Forms

    window.onload = function () {

        // Set focus on first input
        document.getElementById('inputName').focus();

        const mainNav = document.getElementById('main-navbar');

        // Show navbar
        if (mainNav) {
            setTimeout(function () {
                mainNav.classList.add('show')
            }, 500)
        }
    }

    // Contact form


    // Reset form
    document.getElementById('reset').addEventListener('click', function () {
        const name = document.getElementById('inputName');
        const email = document.getElementById('inputEmail');
        const message = document.getElementById('inputMessage');

        // Reset fields
        name.value = '';
        email.value = '';
        message.value = '';

        // Focus on first input
        document.getElementById('inputName').focus();

        // Hide alert
        const alertBox = document.getElementById('custom-alert');
        alertBox.classList.remove('show');
        alertBox.classList.add('hidden');

    })

    // Show custom alert
    function showAlert(message, isSuccess = false) {
        const alertBox = document.getElementById('custom-alert');
        const alertMessage = document.getElementById('alert-message');

        alertMessage.textContent = message;

        if (isSuccess) {
            alertBox.classList.remove('bg-red');
            alertBox.classList.add('bg-green');
        } else {
            alertBox.classList.remove('bg-green');
            alertBox.classList.add('bg-red');
        }

        alertBox.classList.remove('hidden');
        alertBox.classList.add('show');

        document.getElementById('close-alert').addEventListener('click', function () {
            alertBox.classList.remove('show');
        });

        setTimeout(function () {
            alertBox.classList.remove('show');
        }, 5000);
    }

    function validateName(name) {
        const namePattern = /^[A-Z][a-z]{1,}([ ][A-Z][a-z]{1,})*$/;
        return namePattern.test(name);
    }

    function validateEmail(email) {
        const emailPattern = /^[^@.\s][^@\s]*[^@.\s]@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
        return namePattern.test(email)
    }

    // Submit form
    document.getElementById('submit').addEventListener('click', function (event) {
        // Prevent from send
        event.preventDefault();

        const name = document.getElementById('inputName');
        const email = document.getElementById('inputEmail');
        const message = document.getElementById('inputMessage');

        let isValid = true;

        // Validate if fields are empty
        if (name.value === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            name.focus();
            stop();
        } else if (email.value === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            email.focus();
        } else if (message.value === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            message.focus();
        } else {
            if (!validateName(name.value)) {
                showAlert('Please enter a valid name.');
                name.focus();
                name.value = '';
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showAlert('Please enter a valid email.');
                email.focus();
                email.value = '';
                isValid = false;
            }
        }

        if (isValid) {
            showAlert('Message sent, thank you.',true);
        }

        return isValid;
    })
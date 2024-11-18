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

    document.getElementById('submit').addEventListener('click', function (event) {
        // Prevent from send
        event.preventDefault();

        const name = document.getElementById('inputName').value;
        const email = document.getElementById('inputEmail').value;
        const message = document.getElementById('inputMessage').value;

        let isValid = true;

        // Validate if fields are empty
        if (name === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            document.getElementById('inputName').focus();
        } else if (email === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            document.getElementById('inputEmail').focus();
        } else if (message === '') {
            showAlert('Please fill in all fields.')
            isValid = false;
            document.getElementById('inputMessage').focus();
        }

        // Validate email format
        const emailPattern = /^[^@]+@[^@]+$/;

        if (email !== '' && !emailPattern.test(email)) {
            showAlert('Please enter a valid email address.');
            document.getElementById('inputEmail').focus();
            document.getElementById('inputEmail').value = ''
            isValid = false;
        }

        if (isValid) {
            showAlert('Message sent, thank you.',true);
        }

        return isValid;
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

    
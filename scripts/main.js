$(document).ready(function() {
    AOS.init({
        duration: 1000,
        offset: 100,
        easing: 'ease-in-out',
    });

    $('#contactModal').on('shown.bs.modal', function () {
        $('#name').focus();
    });

    $("#contactForm").on('submit', function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var isValid = true;

        if (name === "") {
            isValid = false;
            alert("Please enter your name.");
            $("#name").focus();
        }

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            alert("Please enter a valid email address.");
            $("#email").focus();
        }

        if (message === "") {
            isValid = false;
            alert("Please enter your message.");
            $("#message").focus();
        }

        if (isValid) {
            $.ajax({
                type: "POST",
                url: "https://formspree.io/f/xvgzrgel",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                success: function() {
                    $("#responseMessage").html("<p class='alert alert-success'>Thanks for contacting us! We have received your message.</p>").show();
                    $("#contactModal").modal('hide');
                    $("#contactForm")[0].reset();
                },
                error: function() {
                    $("#responseMessage").html("<p class='alert alert-danger'>There was an error sending your message. Please try again later.</p>").show();
                }
            })
        }

    });

});

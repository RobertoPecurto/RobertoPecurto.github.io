$(document).ready(function() {

    // Header animation
    $("header").css({
        "position": "relative",
        "top": "-100px",
    });

    $("header").animate({
        "top": "0",
        "opacity": "1"
    }, 500);

    // Title animation
    $('#web-text, #web-image, #developer-text').css({
        "position": "relative",
        "top": "250px",
        "opacity": "0"
    });

    $('#web-text, #web-image, #developer-text').each(function(index) {
        $(this).delay(index * 200).animate({
            "top": "0",
            "opacity": "1"
        }, 300);
    });

    // Smooth scroll behavior on click
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Horizontal movement for the links
    $(window).on("scroll", function() {
        var scrollPosition = $(window).scrollTop();
        
        const moveAmount = scrollPosition * 0.2;
        $("#projects-link").css("transform", "translateX(" + (100 - moveAmount) + "%)");
        $("#curriculum-link").css("transform", "translateX(" + (moveAmount - 100) + "%)");

        const delayOffset = 50;
        $("#about-me-link").css("transform", "translateX(" + (100 - (moveAmount - delayOffset)) + "%)");
    });

    $('#projectsCarousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });
    

    // Focus on the name when modal is opened
    $('#contactModal').on('shown.bs.modal', function () {
        $('#name').focus();
    });

    // Validates and submits the contact form using AJAX
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

        const emailPattern = /^[^@.\s][^@\s]*[^@.\s]@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
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
                dataType: "json",
                success: function(response) {
                    $("#responseMessage").html("<p class='alert alert-success'>Thanks for contacting us! We have received your message.</p>").show();
                    $("#contactForm")[0].reset();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $("#responseMessage").html("<p class='alert alert-danger'>There was an error sending your message. Please try again later.</p>").show();
                }
            });
        }
    });

    // Border animation
    $(".border-gray-right").each(function() {
        let border = $("<div></div>").css({
            position: "absolute",
            top: "0",
            left: "100%",
            width: "100%",
            height: "2px",
            backgroundColor: "#777"
        });

        $(this).css("position", "relative").append(border);
        border.animate({ left: "0" }, 2000);
    });

    $(".border-gray-left").each(function () {
        let border = $("<div></div>").css({
            position: "absolute",
            top: "0",
            right: "100%",
            width: "100%",
            height: "2px",
            backgroundColor: "#777"
        });

        $(this).css("position", "relative").append(border);
        border.animate({ right: "0" }, 2000);
    });
});

$(function () {
    $("#contactForm input, #contactForm textarea, #contactForm button").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Optionally handle additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevent default submit behavior
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name.split(" ")[0]; // Get first name

            var $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable button to prevent multiple clicks

            $.ajax({
                url: "contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                },
                cache: false,
                success: function () {
                    $("#success").html("<div class='alert alert-success'>");
                    $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Your message has been sent. </strong>")
                        .append("</div>");
                    $("#contactForm").trigger("reset"); // Reset form fields
                },
                error: function (xhr, status, error) {
                    console.error("Error occurred:", status, error); // Log error details
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"))
                        .append("</div>");
                    $("#contactForm").trigger("reset"); // Reset form fields
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable button after 1 second
                    }, 1000);
                },
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('#name').focus(function () {
        $("#success").html(""); // Clear success message on focus
    });
});
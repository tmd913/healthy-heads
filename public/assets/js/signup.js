$(document).ready(function () {
    var signUpForm = $("form.profSignup");
    var emailInput = $("input.email-input");
    var passwordInput = $("input.password-input");
    var confirmPasswordInput = $("input.confirm-password-input");



    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            confirmPassword: confirmPasswordInput.val().trim()

        };
        if (!userData.email || !userData.password || !userData.confirmPassword) {
            return;
        }
        else if (userData.password.indexOf(userData.confirmPassword) > -1) {
            signUpUser(userData.email, userData.password);
        } else {
            alert("Password Mismatch");
        }


    });

    function signUpUser(email, password) {
        $.post("/prof/signup", {
            //Going into User Table:
            email: email,
            password: password,

        }).then(function (data) {
            console.log(data);
            if (data == "/prof/signup") {
                alert(`User already exists.`);
                window.location.replace("/")
            } else {
                window.location.replace(data)
            };
        }).catch(function (err) {
            console.log(err);
        });
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});

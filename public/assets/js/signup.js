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
            confirmPassword: confirmPasswordInput.val()
            
        };



        if (!userData.email || !userData.password) {
            return;
        }
        signUpUser(userData.email, userData.password, userData.confirmPassword);
        emailInput.val("");
        passwordInput.val("");
        confirmPasswordInput.val("");
    });

    function signUpUser(email, password, confirmPassword) {
        $.post("/prof/signup", {
            //Going into User Table:
            email: email,
            password: password,
            confirmPassword: confirmPassword
           
        }).then(function(data) {
            console.log(data);
            if (data == "/prof/signup"){
            alert(`User already exists or Password Mismatch.`);
            window.location.replace("/prof/signup")}
            else{
            window.location.replace(data)
            };
          }).catch(function(err) {
            console.log(err);
          });
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});

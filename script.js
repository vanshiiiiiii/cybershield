$(document).ready(function () {

    // Card Animation
    $(".card").hide().fadeIn(1200);

    // Counter Animation (Home Page)
    $(".counter").each(function () {

        let $this = $(this);
        let target = parseInt($this.attr("data-target"));

        $({ countNum: 0 }).animate(
            { countNum: target },
            {
                duration: 2000,
                easing: "swing",

                step: function () {
                    $this.text(Math.floor(this.countNum));
                },

                complete: function () {
                    $this.text(target);
                }
            }
        );

    });

    // Subscribe Form
    $("form").submit(function (e) {

        e.preventDefault();

        alert("Thank you for subscribing to CyberShield!");

        this.reset();

    });

    // Password Strength Checker
    $("#password").on("keyup", function () {

        let password = $(this).val();

        let hasLength = password.length >= 8;
        let hasUpper = /[A-Z]/.test(password);
        let hasNumber = /[0-9]/.test(password);
        let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Requirements Check
        $("#length").html(
            (hasLength ? "✅" : "❌") +
            " Minimum 8 Characters"
        );

        $("#uppercase").html(
            (hasUpper ? "✅" : "❌") +
            " One Uppercase Letter"
        );

        $("#number").html(
            (hasNumber ? "✅" : "❌") +
            " One Number"
        );

        $("#special").html(
            (hasSpecial ? "✅" : "❌") +
            " One Special Character"
        );

        let score = 0;

        if (hasLength) score++;
        if (hasUpper) score++;
        if (hasNumber) score++;
        if (hasSpecial) score++;

        if (password.length === 0) {

            $("#result")
                .text("Password Strength: -")
                .css("color", "white");

        }
        else if (score <= 2) {

            $("#result")
                .text("Password Strength: Weak")
                .css("color", "#ff4d4d");

        }
        else if (score === 3) {

            $("#result")
                .text("Password Strength: Medium")
                .css("color", "#ffa500");

        }
        else {

            $("#result")
                .text("Password Strength: Strong")
                .css("color", "#00ff88");

        }

    });

});

$(".menu-toggle").click(function(){

$(".navbar ul").toggleClass("active");

let icon = $(this).find("i");

if(icon.hasClass("fa-bars")){
    icon.removeClass("fa-bars");
    icon.addClass("fa-xmark");
}
else{
    icon.removeClass("fa-xmark");
    icon.addClass("fa-bars");
}

});
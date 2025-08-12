const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

// Toggle menu icon and navigation
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form"); // Select the form
    const submitButton = document.querySelector("#contact-form .btn"); // Select submit button

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        let formData = { name, email, message };
        localStorage.setItem("formData", JSON.stringify(formData));

        alert("Form data saved in local storage!");
    });

    // Email validation function
    function validateEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
console.log(JSON.parse(localStorage.getItem("formData")));

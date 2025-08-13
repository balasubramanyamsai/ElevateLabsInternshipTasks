document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting

    let isValid = true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let successMsg = document.getElementById("successMsg");

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Name validation
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation (regex)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required.";
        isValid = false;
    } 
    else if (!emailPattern.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Invalid email format.";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message is required.";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.style.display = "block";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});

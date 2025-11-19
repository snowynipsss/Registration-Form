document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Clear all error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("courseError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Age validation
    const age = document.getElementById("age").value;
    if (age === "" || age <= 0) {
        document.getElementById("ageError").textContent = "Enter a valid age.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
    if (phone === "" || !phonePattern.test(phone.replace(/[\s\-\(\)]/g, ""))) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number.";
        isValid = false;
    }

    // Course validation
    const course = document.getElementById("course").value;
    if (course === "") {
        document.getElementById("courseError").textContent = "Please select a course.";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});

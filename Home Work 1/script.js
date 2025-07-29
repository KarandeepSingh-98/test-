const nameinput = document.getElementById("name");
const phoneNumber = document.getElementById("Phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");



function Name(){
    if (nameinput.value.trim() === "") {
        alert("Please enter your name");
        return false;
    }
    return true;
}

function PhoneNumber() {
    const number = phoneNumber.value.trim();

    if (number === "") {
        alert("Please enter your phone number");
        return false;
    }

    if (!/^\d{10}$/.test(number)) {
        alert("Phone number must be exactly 10 digits");
        return false;
    }

    return true;
}


function Email() {
    if (email.value.trim() === "") {
        alert("Please enter your email");
        return false;
    } else if (!email.value.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}

function Password() {
    const passwordInput = password.value.trim();

    
    if (passwordInput === "") {
        alert("Please enter your password");
        return false;
    }

    if (passwordInput.length < 8 || passwordInput.length > 16) {
        alert("Password must be between 8 and 16 characters long");
        return false;
    }

    // Check for at least one letter and one number
    if (!/[a-zA-Z]/.test(passwordInput) || !/\d/.test(passwordInput)) {
        alert("Password must include both letters and numbers");
        return false;
    }

    return true;
}

function Message() {
    if (message.value.trim() === "") {
        alert("Please enter your message");
        return false;
    }
    return true;
}


submitButton.addEventListener("click", function(e) {
    e.preventDefault(); 

    if (Name() && PhoneNumber() && Email() && Password() && Message()) {
        alert("Form submitted successfully!");
    }
});

// --------------- Dark Mode --------------- 
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})



// ---------------  Show Side-bar --------------- 
function showSidebar() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = 'flex';
}



// ---------------  Hide Side-bar --------------- 
function hideSidebar() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
}



// ---------------  Scroll Animation ---------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1));



// ---------------  Form Validation ---------------                      
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error');


//validate name input
function validateName() {
    const error = nameInput.nextElementSibling;

    if (nameInput.value.trim() === '') {
        error.textContent = 'Name is required.';
        nameInput.style.borderColor = 'red';
        return false;
    }

    nameInput.style.borderColor = '';
    error.textContent = '';
    return true;
}

//validate email input
function validateEmail() {
    const error = emailInput.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === '') {
        error.textContent = 'Email is required.';
        emailInput.style.borderColor = 'red';
        return false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        error.textContent = 'Enter a valid email address.';
        emailInput.style.borderColor = 'red';
        return false;
    }

    error.textContent = '';
    emailInput.style.borderColor = '';
    return true;
}

//validate textarea
function validateMessage() {
    const error = messageInput.nextElementSibling;

    if (messageInput.value.trim() === '') {
        error.textContent = 'Message is required.';
        messageInput.style.borderColor = 'red';
        return false;
    }

    error.textContent = '';
    messageInput.style.borderColor = '';
    return true;
}


//Events
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form > submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        alert('Form submitted successfully!');

        form.reset();

        errorMessages.forEach((error) => (error.textContent = ''));

        [nameInput, emailInput, messageInput].forEach((input) => (input.style.borderColor = ''));
    }
});

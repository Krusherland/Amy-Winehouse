const contactMessage = document.getElementById("contactMessage");

contactMessage.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    let validMessage = true;

    if (name === ""){
        nameError.classList.remove("errorMessage");
        validMessage = false;
    } else {
        nameError.classList.add("errorMessage");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) {
        emailError.classList.remove("errorMessage");
        validMessage = false;
    } else {
        emailError.classList.add("errorMessage");
    }
    if (message.length <10){
        messageError.classList.remove("errorMessage");
        validMessage = false;
    } else {
        messageError.classList.add("errorMessage");
    }
    if (validMessage) {
        alert("Thank you for your message!");

        const formMessage = {
            name: name,
            email: email,
            message: message,
        }
    }
})

const welcomeMessage = document.querySelector("#welcome");
const button = document.getElementById("btn");
const message = document.getElementById("message");


button.addEventListener("click", function() {
    message.textContent = "Your registration is confirmed!"
});



const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");


submitButton.addEventListener("click", function(e) {
e.preventDefault()
submitButton.classList.toggle("changeButtonColor")
const mainName = nameInput.value;
const mainEmail = emailInput.value

result.textContent = `Hi ${mainName}, your registration with the Email Address: ${mainEmail} is successful. Thank you!`
});


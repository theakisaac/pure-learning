const welcomeMessage = document.querySelector("#welcome");
const button = document.getElementById("btn");
const message = document.getElementById("message");


button.addEventListener("click", function() {
    message.textContent = "Your registration is confirmed!"
});
function getRandomMessage() {

let loveMessages = [
    "I love you my love",
    "May our love keeps growing stronger",
    "My love for you is so strong",
    "Achiwa Esnart, I love you so much",
    "I'm so grateful to God for the gift of you",
    "God bless you my love",
    "You're my jewel"
]


    let randomNumber = Math.floor(Math.random() * loveMessages.length)
return loveMessages[randomNumber];

}

console.log(getRandomMessage());

//node task-20-love-message.js
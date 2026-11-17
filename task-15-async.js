async function getPrice() {
    return 50000;
}

async function calculatePrice() {
    let price = await getPrice();
    let totalPrice = price * 3;
    console.log(totalPrice)
}
calculatePrice();


async function inputDetails() {
return "Isaac";
}

async function confirmDetails() {
    let details = await inputDetails();
    console.log(`Welcome back ${details}. Good to have you!`)
}

confirmDetails();


async function makeBooking() {

    try {
let payment = await Promise.reject("Payment failed...")
console.log(payment)
    } catch (error) {
        console.log(error)
    }

}

makeBooking();


async function processingBooking() {

    let bookingProcessing = await Promise.resolve("Processing Booking...")
    console.log(bookingProcessing);

    let payment = await Promise.resolve("Booking confirmed!")
    console.log(payment);

    let booking = await Promise.resolve("Booking saved succesfully!")
    console.log(booking);

    let email = await Promise.resolve("Check your inbox. Email sent.") 
       console.log(email);
}

processingBooking();



async function getDestination() {
    return "Zambia"
};

async function getPackages() {
    return ["Lusaka Museum", "Victoria Falls", "Central Business District"];

}

async function makeBookings() {

    let [destination, packages] = await Promise.all([
        getDestination(), getPackages()
    ])

    console.log(destination)
    console.log(packages)
}

makeBookings();


// node task-15-async.js
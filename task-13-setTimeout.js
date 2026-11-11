console.log("Welcome back, Isaac")

let bookingTimer = setTimeout(() => {
console.log("Booking Completed!")
}, 2000);

console.log("Please wait while we process your booking...");

clearTimeout(bookingTimer);


console.log("\n")

console.log("Processing payment...")
setTimeout(() => {

    let paymentStatus = "success";

    if (paymentStatus === "success") {
        console.log("Your booking is processed successfully!")
    } else if (paymentStatus === "failed") {
 console.log("Your booking cannot be processed. Please try again. Thank you!")
    } else {
        console.log("Sorry, Your booking is pending..")
    }

}, 3000);

console.log("Please wait while we process your booking.")

// node task-13-setTimeout.js
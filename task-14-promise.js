let payment = new Promise((resolve, reject) => {
    let paymentStatus = "success"
    if (paymentStatus === "success") {
        resolve("Payment Successful")
    } else {
        reject("Payment unsuccessful")
    }
});

payment
.then((result) => {
console.log("Success:", result)
})
.catch((error) => {
    console.log("Failed:", error)
})

.finally(() => {
console.log("Booking has ended!")
});



// node task-14-promise.js
// let payment = new Promise((resolve, reject) => {
//     let paymentStatus = "success"
//     if (paymentStatus === "success") {
//         resolve("Payment Successful")
//     } else {
//         reject("Payment unsuccessful")
//     }
// });

// payment
// .then((result) => {
// console.log("Success:", result)
// })
// .catch((error) => {
//     console.log("Failed:", error)
// })

// .finally(() => {
// console.log("Booking has ended!")
// });


let booking = new Promise((resolve, reject) => {
    resolve(100000);
});

booking
    .then((amount) => {
        console.log(amount);
        return amount + 5000;
    })
    .then((newAmount) => {
        console.log(newAmount);
        return newAmount * 2;
    })
    .then((finalAmount) => {
        console.log(finalAmount);
    });

// node task-14-promise.js
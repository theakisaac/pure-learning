let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

let totalRevenue = bookings.reduce((total, booking) => {
    return total + booking.amountPaid
}, 0);
console.log(totalRevenue)

console.log("\n")

let totalTravelers = bookings.reduce((total, booking) => {
return total + booking.travelers
}, 0);
console.log(totalTravelers)

console.log("\n")

let rwandaBooking = bookings.reduce((total, booking) => {

    if (booking.destination === "Rwanda") {
return total + (booking.travelers * booking.amountPaid)
    } else {
return total;
    }
}, 0);
console.log(rwandaBooking)


// node task-08-array-reduce.js
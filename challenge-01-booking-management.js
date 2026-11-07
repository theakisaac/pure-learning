let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

for (let i = 0; i < bookings.length; i++) {
    console.log(bookings[i].name);
}
console.log("\n");

for (let booking of bookings) {
    console.log(booking.destination)
}
console.log("\n");

let totalTravelers = 0;
for (let booking of bookings) {
    totalTravelers = totalTravelers + booking.travelers;
}
console.log(totalTravelers);

console.log("\n");

let totalRevenue = 0;

for (let booking of bookings) {
    totalRevenue = totalRevenue + booking.amountPaid;
}

console.log(`#${totalRevenue.toLocaleString("en-NG")}`);

console.log("\n");

for (let i = 0; i < bookings.length; i++) {
    console.log(`Booking ${i + 1}: ${bookings[i].name} | Destination: ${bookings[i].destination} | Travelers: ${bookings[i].travelers} | Amount Paid: #${bookings[i].amountPaid.toLocaleString()}`);

}

console.log(bookings[bookings.length - 1])


console.log("\n");

let findBooking = bookings.find(booking => booking.name === "Sarah")
console.log(findBooking);


// node challenge-01-booking-management.js
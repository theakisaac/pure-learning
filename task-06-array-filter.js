let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

let topTravelers = bookings.filter(booking => booking.travelers >= 3)
console.log(topTravelers);

console.log("\n");

let topAmountPaid = bookings.filter(booking => booking.amountPaid > 500000)
console.log(topAmountPaid);

console.log("\n");

let otherDestinations = bookings.filter(booking => booking.destination !== "Rwanda");
console.log(otherDestinations);

console.log("\n");

let combinedConditions = bookings.filter(booking => (booking.travelers >= 3) && (booking.amountPaid >= 500000));
console.log(combinedConditions);
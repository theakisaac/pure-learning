let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

let customerNames = bookings.map(booking => booking.name);
console.log(customerNames);

let allDestinations = bookings.map(booking => booking.destination)
console.log(allDestinations);

let serviceCharge = bookings.map(booking => booking.amountPaid + (booking.amountPaid * 0.1));
console.log(serviceCharge);

let sentences = bookings.map(booking => (`${booking.name} booked a trip to ${booking.destination} with ${booking.travelers} travelers.`));
console.log(sentences);

// node task-07-array-map.js
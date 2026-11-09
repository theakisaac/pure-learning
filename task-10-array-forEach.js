let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

// bookings.forEach(booking => {
//     console.log(booking)
// });

// bookings.forEach(
//     booking => {
//         console.log(booking.name)
//     }
// );

// bookings.forEach(
//     booking => {
//         console.log(booking.destination)
//     }
// );


let customerNames = bookings.map(booking => {
    return booking.name;
});

console.log(customerNames)

// node task-10-array-forEach.js
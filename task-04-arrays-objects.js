let destinations = ["Kenya", "Rwanda", "Maldives", "Qatar", "Seychelles"];

console.log(destinations[0]);
console.log(destinations[2]);
console.log(destinations[4]);

console.log("\n")

let traveler = {
    name: "Isaac",
        destination: "Rwanda",
        travelers: 2,
        amountPaid: 250000,
        paymentStatus: "Paid"
    }


console.log(traveler.name);
console.log(traveler.destination);
console.log(traveler.amountPaid);
console.log(traveler.paymentStatus);

console.log("\n")

let bookings = [
    {
        name: "Isaac",
        destination: "Rwanda",
        travelers: 2
    },

    {
        name: "Daniel",
        destination: "Kenya",
        travelers: 3
    },

    {
         name: "Esther",
        destination: "Maldives",
        travelers: 4
    }
]

console.log(bookings[2].destination);

console.log("\n")

let otherBooking = bookings.find(booking => booking.travelers === 2)
console.log(otherBooking)
// task-04-arrays-objects.js
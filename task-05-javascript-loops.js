let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2 },
    { name: "Daniel", destination: "Kenya", travelers: 3 },
    { name: "Esther", destination: "Maldives", travelers: 4 },
    { name: "David", destination: "Qatar", travelers: 2 },
    { name: "Sarah", destination: "Seychelles", travelers: 5 }
];

for (let i = 0; i < bookings.length; i++) {
    console.log(bookings[i].name)
}

console.log("\n")

for (let booking of bookings) {
console.log(booking.destination)
}

console.log("\n")

for (let booking of bookings) {
console.log(`${booking.name} is travelling to ${booking.destination} with ${booking.travelers} travelers.`)
}

console.log("\n")


let totalTravelers = 0;
for (let booking of bookings) {
totalTravelers = totalTravelers + booking.travelers;
}

console.log(totalTravelers);





// task-05-javascript-loops.js
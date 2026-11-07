const travelerName = "Isaac";
let destination = "Zambia";
let costOfTrip = 2300000;
let numberOfTravelers = 2;

let totalBookingCost = costOfTrip * numberOfTravelers;

console.log("TRAVEL BOOKING SUMMARY");
console.log("\n");

console.log(`Traveler's Name: ${travelerName}`);
console.log(`Destination: ${destination}`);
console.log(`Cost of Trip: #${costOfTrip.toLocaleString()}`);
console.log(`Number of Travelers: ${numberOfTravelers}`);

console.log("\n");
console.log(`Total Cost of Booking: #${totalBookingCost.toLocaleString()}`);
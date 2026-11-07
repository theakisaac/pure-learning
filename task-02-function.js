function calculateBookingCost (costPerPerson, numberOfTravelers) {
let total = costPerPerson * numberOfTravelers;
return total;
}

console.log(calculateBookingCost(1200000, 24));
console.log(calculateBookingCost(230000, 12));
console.log(calculateBookingCost(100000, 20));

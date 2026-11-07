function calculateFinalBookingCost(costPerPerson, numberOfTravelers) {

let totalCost = costPerPerson * numberOfTravelers;
let finalCost;

if (numberOfTravelers <= 4) {
finalCost = totalCost;
} else if (numberOfTravelers <= 9) {
    finalCost = totalCost - (totalCost * 0.05);
} else {
    finalCost = totalCost - (totalCost * 0.1);
}
return (`#${finalCost.toLocaleString("en-NG")}`)
}

console.log(calculateFinalBookingCost(100, 15));
console.log(calculateFinalBookingCost(10000, 2));
console.log(calculateFinalBookingCost(5000, 6));

// node task-03-conditions.js
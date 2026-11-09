let bookings = [
    { name: "Isaac", destination: "Rwanda", travelers: 2, amountPaid: 250000 },
    { name: "Daniel", destination: "Kenya", travelers: 3, amountPaid: 450000 },
    { name: "Esther", destination: "Maldives", travelers: 4, amountPaid: 800000 },
    { name: "David", destination: "Qatar", travelers: 2, amountPaid: 300000 },
    { name: "Sarah", destination: "Seychelles", travelers: 5, amountPaid: 1250000 }
];

let sortedCustomers = [...bookings].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedCustomers);

let lowestAmountPaid = [...bookings].sort((a, b) => a.amountPaid - b.amountPaid);
console.log(lowestAmountPaid);

let highestAmountPaid = [...bookings].sort((a, b) => b.amountPaid - a.amountPaid);
console.log(highestAmountPaid);

let highestTravelers = [...bookings].sort((a, b) => b.travelers - a.travelers);
console.log(highestTravelers);


// node task-09-array-sort.js

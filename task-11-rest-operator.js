let destinations = [
    "Rwanda",
    "Kenya",
    "Maldives",
    "Qatar",
    "Seychelles"
];

let [firstDestination, ...otherDestinations] = destinations;
console.log(firstDestination)
console.log(otherDestinations)


let calculateTotalPackagePrice = (...prices) => {
let total = 0;

for (let price of prices) {
    total = total + price;

    return total;
}

}

console.log(calculateTotalPackagePrice(3,5,9,10))

// node task-11-rest-operator.js



let original = [
    { name: "Isaac", destination: "Rwanda" },
    { name: "Daniel", destination: "Kenya" }
];

let copy = [...original];

copy[0].name = "David";

copy[1] = {
    name: "Esther",
    destination: "Maldives"
};

console.log(original[0].name);
console.log(original[1].name);
console.log(copy[0].name);
console.log(copy[1].name);
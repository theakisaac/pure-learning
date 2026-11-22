let packages = [
  {
    destination: "Zambia",
    price: 150000,
    available: true,
    reference: "BWW2026"
  },
  {
    destination: "Rwanda",
    price: 200000,
    available: false,
    reference: "BWW2027"
  },
  {
    destination: "Kenya",
    price: 180000,
    available: true,
    reference: "BWW2028"
  },
  {
    destination: "Ghana",
    price: 120000,
    available: true,
    reference: "TRAVEL2029"
  }
];

//Task 1: Filter available packages
let availablePackages = packages.filter(package => package.available === true)
console.log(availablePackages);

//Task 2: Display destination and price
for (let package of availablePackages) {
    console.log(`Destination: ${package.destination}`)
     console.log(`Price: ${package.price}`)
}

//Task 3: Validate booking references
let referencePattern = /^BWW\d{4}$/;

let validPackages = availablePackages.filter(package => referencePattern.test(package.reference));
console.log(validPackages);


//Task 4: Calculate total package value

let totalValue = validPackages.reduce((total, package) => total + package.price, 0);
console.log(totalValue);

// node task-19-exercise.js
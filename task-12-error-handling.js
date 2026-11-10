let name = "Isaac";

console.log(`Welcome, ${name}`)
try {
let price = 20000;
let VAT = 4
let total = price * VAT
console.log(`Your total balance is #${total.toLocaleString()}, VAT inclusive`)
} catch (error) {
console.log("Sorry, an error occured. Please try again!")
}

console.log(`Thank you ${name}, for choosing Travel with BWW.`)


console.log("\n");

try {
let price = 150000;
let discount = 0.1;
let total = (price * discount);
console.log(`#${total.toLocaleString("en-NG")}`);
} catch (error) {
    console.log("Please try again");
} finally {
console.log("Order placed successfully!");
}


console.log("\n");

console.log("Welcome to BWW");

try {
    let destination = "Kenya";
    console.log(destination);

    console.log(travelers);
} catch (error) {
    console.log("Booking details unavailable.");
} finally {
    console.log("Thank you for your patience.");
}

console.log("Visit BWW to explore more destinations.");

let traveler = 1;

try {
    if (traveler <= 0) {
        throw new Error("Number of traveler must at least 1.")
    }
    console.log("Booking processed!")

} catch (error) {
console.log("Sorry, an error occured!")
} finally {
console.log("Booking ended. Thank you!")
}
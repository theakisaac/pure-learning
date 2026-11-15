async function getPrice() {
    return 50000;
}

async function calculatePrice() {
    let price = await getPrice();
    let totalPrice = price * 3;
    console.log(totalPrice)
}
calculatePrice();


async function getDestination() {
    return "Zambia"
}

async function knowDestiation() {
    let destination = await getDestination()
    console.log(`Your Booking to ${destination} is confirmed.`)
}

knowDestiation();


// node task-15-async.js
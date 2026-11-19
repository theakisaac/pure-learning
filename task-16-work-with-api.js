
// async function getMoreInfo() {

//     try{
//         let response = await fetch("https://www.example.com/api")
        
//         if(!response.ok) {
//             throw new Error("Sorry, an error occured. Try again later!")
//         }

//         let data = await response.json();
//         console.log(data)
//     } catch(error){
//         console.log("Error:", error.message)
//     }
// }

// getMoreInfo();


// async function getTravelPackage() {

//     try {
//         let response = await fetch("https://example.com/api/packages")

//         if(!response.ok) {
//             throw new Error("Error occured. Try again!")
//         }
//         let data = await response.json();
//         console.log(data.destination)
//         console.log(data.price)

//     } catch(error) {
//         console.log(error.message)
//     }


// }

// getTravelPackage()


// async function getUserDetails() {

//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1?utm_source=chatgpt.com")
//         if(!response.ok){
//             throw new Error("Sorry, an error occured")
//         }

//         let data = await response.json();
//         console.log(data.username)
//         console.log(data.email)
//         console.log(data.address.city)

//     }catch(error) {
//         console.log("Error:", error.message)
//     }



// }
// getUserDetails()


// node task-16-work-with-api.js


async function getUserInfo() {

    try{
        let details = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!details.ok) {
            throw new Error("Unable to get infomation. Please try again!")
        }

        let moreDetails = await details.json();
        let filteredDetails = moreDetails.filter(info => info.id === 6);
        console.log(filteredDetails)

    } catch(error){
        console.log("Error:", error.message)
    }
}

getUserInfo();

let packages = [
  { destination: "Zambia", price: 150000 },
  { destination: "Rwanda", price: 200000 },
  { destination: "Kenya", price: 180000 }
];


async function submitBooking() {
    try{

        let response = await fetch("https://example.com/booking",
            {method: "POST",
                heading: { "Content-Type": "application.json"},
            body: JSON.stringify(booking)

            }
        )
            if(!response.ok) {
                throw new Error("Authentication failed. Try again!");
            }

            let data = await response.json();
            console.log("Booking Successful:", data)

        


    } catch(error) {
        console.log(error.message)
    }


};


async function updateBooking() {
let update = await fetch("https://example.com/bookings/1", {
method: "PATCH",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({travelers: 3})
})
}
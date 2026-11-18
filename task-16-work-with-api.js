
async function getMoreInfo() {

    try{
        let response = await fetch("https://www.example.com/api")
        
        if(!response.ok) {
            throw new Error("Sorry, an error occured. Try again later!")
        }

        let data = await response.json();
        console.log(data)
    } catch(error){
        console.log("Error:", error.message)
    }
}

getMoreInfo();


async function getTravelPackage() {

    try {
        let response = await fetch("https://example.com/api/packages")

        if(!response.ok) {
            throw new Error("Error occured. Try again!")
        }
        let data = await response.json();
        console.log(data.destination)
        console.log(data.price)

    } catch(error) {
        console.log(error.message)
    }


}

getTravelPackage()


async function getUserDetails() {

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1?utm_source=chatgpt.com")
        if(!response.ok){
            throw new Error("Sorry, an error occured")
        }

        let data = await response.json();
        console.log(data.username)
        console.log(data.email)
        console.log(data.address.city)

    }catch(error) {
        console.log("Error:", error.message)
    }



}
getUserDetails()


// node task-16-work-with-api.js
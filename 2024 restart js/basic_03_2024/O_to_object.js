// OBJECT IN OBJECT

// const comapnyDetails = {
//     Comapnyname : "googal",
//     location : "delhi",
//     time : 23,
//     regesterd : true,
// }

// console.log(comapnyDetails);

const homeDetails = {
    Username: {
        fullName: {
            firstName: "divyanshu",
            lastName: "tailor",
        }
    },
    age: 56,
    authoritzed: false,
    location: "delhi",
    remoteWork: ["noida", "faridabad", "gurgaon",]
}

// console.log(homeDetails);
// console.log(homeDetails.Username)
// console.log(homeDetails.Username.fullName)
// console.log(homeDetails.Username.fullName.lastName)


homeDetails.Username.fullName = "ramji"
Object.freeze(homeDetails);
console.log(homeDetails)


console.log(Object.keys(homeDetails))
console.log(Object.values(homeDetails))
console.log(Object.entries(homeDetails))
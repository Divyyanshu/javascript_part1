//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++stack vs heap memeory +++++++++++++++++++++++
// stack ==> primitive memory
// heap  ====> non - premitive

// let email = "dei@123";
// let phone = 123456;

// let Email = email
// Email = "ram ram"
// console.log(Email)
// console.log(email)   its doest chnge copy value


// let userone = {
//     userEmail:"divyanshu",
//     userupi:123456
// }
// let user2 = userone;
// user2.userEmail = "dt1881"
// console.log(user2)
// console.log(userone)
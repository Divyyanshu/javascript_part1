// // singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1");

// const JsUser = {
//   name: "Hitesh",
//   // "full name": "Hitesh Choudhary",
//   [mySym]: "mykey1",
//   age: 18,
//   location: "Jaipur",
//   email: "hitesh@google.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"],
// };

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com";
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com";
// // console.log(JsUser);


// JsUser.name = "Divynahsu tailor";
// console.log(JsUser);
// JsUser.greeting = function () {
//   console.log("Hello JS user");
// };
// JsUser.greetingTwo = function () {
//   console.log(`Hello JS user, ${this.name}`);
// };

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



const userSchool = {
    id : 45,
    name : "Mayank tailor",
    status : "single",
    address : "bhilwara rajasthan",
    class : "8th",
    Entery : true,
}
// console.table(userSchool)

// chnges value in objects
userSchool.address = "jaipur rajsathan"
console.table(userSchool)
// Object.freeze(userSchool)
userSchool.address = "jhodpur rajasthan"
console.table(userSchool)

// use function
 userSchool.expo = function(){
    console.log('hello developer')
 }
 userSchool.export = function(){
    console.log(`hello developer ${this.address}`)
 }
 console.log(userSchool.expo())
 console.log(userSchool.export())
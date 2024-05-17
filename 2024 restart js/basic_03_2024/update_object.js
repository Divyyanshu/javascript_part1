let jaisymbol = Symbol ("temple");

const objectCollage ={
   fun : function colors(a,b) {
        console.log(a+b);
    },
    email : "divyanshu@googal.com",
    age: 22,
    location : "bhilwara",
    married : false,
    [jaisymbol] : "om namaha shivya",
}
// Object.freeze(objectCollage);
console.log(objectCollage);
console.log(objectCollage.email)
console.log(typeof objectCollage.fun(10,56));

// updation in object and use object.freeze;

objectCollage.email = "divyanshu@microsoft.com";
Object.freeze(objectCollage);
console.log(objectCollage);
objectCollage.email = "divyanshu@arcgate.com";
console.log(objectCollage);

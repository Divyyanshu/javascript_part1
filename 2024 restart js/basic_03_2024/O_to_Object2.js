// const obj1 = {
//     1 : 'a',
//     2 : "b"
// }
// const obj2 = {
//     3 : 'a',
//     4 : "b"
// }
// const obj3 = {
//     5 : 'a',
//     6 : "b"
// }

// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4)
// console.log(obj4 === obj1);


let mysymbol = Symbol ("bar");

const beerBar = {
    beer : "budwiser",
    wisky : "signature",
    monk : "ols monk",
    hooka : {
        preminum : {
            floavored : ['red','green apple'],
            tambakoo : ['advance','goldflake']
        }
    },
    location : ()=>{
        console.log("udaipur")
   },
   cigreet : "limon",
   [mysymbol] : "happy-ending",
   alcholicOrNot : true
}

console.log(beerBar);
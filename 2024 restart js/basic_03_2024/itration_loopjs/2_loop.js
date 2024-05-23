//use arry in loop


// let myArry = ["flash" , "boom" , "superman", "spiderman"]

// for (let i = 0; i < myArry.length; i++) {
//     // const element = myArry[i];
//     console.log(myArry[i])
// }



// use break and continue


// break 
for (let i = 0; i < 30; i++) {
    if (i == 15) {
        console.log("detected 15");
        break;
    }
  console.log(`value is ${i}`)
};
// continue
for (let i = 0; i < 30; i++) {
    if (i == 15) {
        console.log("detected 15");
        continue;
    }
  console.log(`value is ${i}`)
}
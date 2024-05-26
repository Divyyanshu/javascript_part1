// const array1 = [1, 2, 3, 4];


// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);


// accumulator / currentvalue / initalvalue

const mynumber = [ 1 , 2, 3 ,4 ,5]

let mynewnumber = mynumber.reduce(function(acc , currval){
    console.log(`accumulator response : ${acc} add my current-value:${currval}`)
    return acc + currval
},0)
console.log(mynewnumber)


// uusing arrow function

mynewnumber = mynumber.reduce((accumulator,currentValue) => accumulator+currentValue , 4)

 console.log(mynewnumber)
let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]

// const mynewnumber = myNumber.map((num)=> num + 10)/

// console.log(mynewnumber);


// chainning the map and filter this is important
//  map add kuch bhi mix opertion perform krne me kaam ata hai
// filter filter krne me kaam ata hai data ko

const mynewnumber = myNumber
                            .map((number)=> {return number *10})
                            .map((number)=> number+1)
                            .filter((number)=>{return number >= 51 || number == 100})
                            .reduce

                            console.log(mynewnumber);
const myNum = [1,2,3,4,5,6,7,8,9,10]

const newnum = myNum.filter((Num)=> Num>=5)

console.log(newnum);


// using for each loop
const mynewnum = []

myNum.forEach((num)=>{
    if(num>=3){
        mynewnum.push(num)
    }
})

console.log(mynewnum);

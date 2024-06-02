const course = [
    {
      "coursename" : "pyhthon",
      "price" : 1500
    },
    {
      "coursename" : "java",
      "price" : 1800
    },
    {
      "coursename" : "javascript",
      "price" : 2500
    },
    {
      "coursename" : "c++",
      "price" : 1500
    },
    {
      "coursename" : "ruby",
      "price" : 1900
    },
]

// using norma;l function
// const totalpricebill = course.reduce(function(accumulator,course){
//     console.log(`course name${accumulator} ke sath course ki price${course.price}`)
//     return accumulator+course.price},0)
// console.log(totalpricebill)

// using arrow function

const totalpricebill = course.reduce(
    (accumulator,course)=> accumulator + course.price
,0)
// console.log(`total Bill of course is ${totalpricebill}`)
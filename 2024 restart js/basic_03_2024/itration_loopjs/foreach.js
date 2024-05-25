const programming = ["js" , "html" , "css" , "py" , "c++" , "swift" ,"dart"]


programming.forEach(
    (val ,index ,array) => {
        // console.log(val,index,array)
    }
)


// multiple object in one array


const mycoding = [
    {
        languagename : "javascript",
        launguagefile : "js",
        laungygeyear : 1563,
    },
    {
        languagename : "HTML",
        launguagefile : ".HTM",
        laungygeyear : 1500,
    },
    {
        languagename : "java",
        launguagefile : "javafile",
        laungygeyear : 1650,
    },
    {
        languagename : "python",
        launguagefile : "py",
        laungygeyear : 1800,
    }
]

mycoding.forEach((val)=>{
console.log(val.launguagefile)
})

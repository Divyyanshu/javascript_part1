// for in work on object array

const myobject = {
    js : "javascript",
    html: "hypertext markup language",
    css : "cascasding style sheet",
    py : "python",
    rb : "ruby"
}

for (const key in myobject) {
    // console.log(`${key} is a name notation for ${myobject[key]}`)
}


// arry in for in


const programming = ["js" , "html" , "css" , "py" , "c++" , "swift" ,"dart"]
// for (const i of programming) {
//     console.log(i)
// }

for (const key in programming) {
//    console.log(programming[key])
}


const map = new Map()
map.set("In", "INDIA")
map.set("USA", "united state of america")
map.set("PAK", "pakistan")
map.set("CHI", "china")
map.set("FR", "france")
map.set("PAK", "pakistan")

for (const key in map) {
   console.log(map[key])
}


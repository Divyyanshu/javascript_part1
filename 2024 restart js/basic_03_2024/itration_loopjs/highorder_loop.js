
let arr = ["divyanshu", "chemesity"]

for (const i of arr) {
    console.log(i)
}

// map  is an object 

const map = new Map()
map.set("In", "INDIA")
map.set("USA", "united state of america")
map.set("PAK", "pakistan")
map.set("CHI", "china")
map.set("FR", "france")
map.set("PAK", "pakistan")


for (const [key, value] of map) {
    console.log(key, "->", value)
}


// (object TypeError: myobject is not iterable)

const myobject = {
    jai: "bhilwara",
    ankit: "jaipur",
    mayank: "ajmer"
}

for (const [key , value] of myobject) {
    console.log(key, "->", value)
}

// console.log(map)
let profileDiv = {
    name : "divyanshu tailor",
    age : 22,
    married : false,
    address : "bhilwara rajasthan",
    skills : ["web development" , "app development" ,"AI/ML"]
}


profileDiv.greet = function(){
    console.log("hello bhyia")
}

profileDiv.greetadder = function(){console.log(`hello ji bhyia, ${this.name}`)};

console.log(profileDiv);
console.log(profileDiv.greet());
console.log(profileDiv.greetadder());
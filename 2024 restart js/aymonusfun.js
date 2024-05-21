// anonymous function js

let div = function(){
    let a= 10;
    let b= 15;
    console.log(a+b);
}

div();


// immediate invoked func expression
 
(function(){
    let k = 56;
    let d = 20;
    console.log(k+d);
})();


// Arrow function
let a = ()=> console.log("hello dk");
a();


let name = (g,j) => console.log(g/j);
name(802445,50);

let circleRadius = function (l,k){
    console.log(l*k)
}


circleRadius(10,5);
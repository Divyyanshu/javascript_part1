const books = [
    {
        tiltle : "book1" ,
        genric: "histroy",
        publish : 1956,
        edition : 2015
    },
    {
        tiltle : "book2" ,
        genric: "chem",
        publish : 1956,
        edition : 2015
    },
    {
        tiltle : "book3" ,
        genric: "maths",
        publish : 1999,
        edition : 2018
    },
    {
        tiltle : "book4" ,
        genric: "drowing",
        publish : 1956,
        edition : 2018
    },
    {
        tiltle : "book5" ,
        genric: "physic",
        publish : 2005,
        edition : 2015
    },
    {
        tiltle : "book6" ,
        genric: "hindi",
          publish : 1856,
        edition : 2016
    },
    {
        tiltle : "book7" ,
        genric: "histroy",
        publish : 2000,
        edition : 2011
    }
]

let username = books.filter((bk)=> bk.genric === "histroy");
 let usernames = books.filter((bk)=>{
 return bk.publish >= 2000;
});
console.log(username)
console.log(usernames);
let jeansPrice = (2000-(20/100*2000))-150;
let ladiesBag = (5000-(25/100*5000))-500;
let deliverCharge = 25.5;
let ConvenientCharge = 50.3;
let gstCharge = (118/100);
let Bagvalue = Math.round((jeansPrice + ladiesBag+ deliverCharge + ConvenientCharge)* gstCharge)
let bagSummary = `total mayntra cart amount is 💸 ${Bagvalue}`;
console.log(bagSummary);

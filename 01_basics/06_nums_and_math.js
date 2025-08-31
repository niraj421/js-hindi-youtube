const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++ Maths ++++++++++++++
//console.log(Math);
//console.log(Math.abs(-4)); //abs ka absolute value , output 4
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.2));//ceil 4.2 ka output 5
//console.log(Math.floor(4.9));// floor 4.9 ka output 4 

//console.log(Math.min(1,2,3,4,5,6,7,8,));
//console.log(Math.max(1,2,3,4,5,6,7,8,));

console.log(Math.random());// value lie between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);// value lie 1 to 9


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


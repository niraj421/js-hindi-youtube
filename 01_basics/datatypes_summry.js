// primitive

//7 types: string,number ,Boolean ,null, undefined,symbol,BiGint
const score = 100
const scoreValue = 100.3
const isLoggedsIn = false 
const ooutsideTmp = null 

let userEmail;
const  id = Symbol('123')

const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 34654357665447885n


//Refefrence (non primitive)

//Array ,object, functions
const heros = ["shaktiman","naagraj","doya"]

let myObj = {
    name:"hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

const score =900
//console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1233.8999           // gives the precision value and others are exponantional value
//console.log(otherNumber.toPrecision(3));  // output is 1.23e+3

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));

///////++++++++++++++++++++++  M A T H S ++++++++++++++++++//////

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(32,2,8,6));
// console.log(Math.max(42,2,5,8));

console.log(Math.random());    //Math.random always gives the value under 0 and 1
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); //more the 1

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min)



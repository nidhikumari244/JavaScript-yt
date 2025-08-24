// Primitive

// 7 types : String ,Number, Boolean, Null, undefined, Symbol, BigInt

const score = 102
const scoreValue= 100.4

const isLoggedIn = false
const outsidetemp=null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('246')

console.log(id===anotherId);

const bigNumber =2345678987654321n


//Refrence (Non primitive)

//Array, Objects, function

const heroes =["krishna","Radha","shiv ji","Maa Saraswati"]
 let myObj= {
    name: "nidhi",
    age:19,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);   //return type: bigint
console.log(typeof outsidetemp);  //Ret. type: object
console.log(typeof  scoreValue);   //Ret. ty: number
console.log(typeof myFunction);     //r.t.: function
console.log(typeof anotherId);       // R.T: symbol
console.log(typeof heroes);           // R.t: object


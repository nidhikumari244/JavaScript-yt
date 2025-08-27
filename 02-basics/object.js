// Singleton

// Object literals 

//Object.create      //constructor ke through

const mySys = Symbol("key1")


const JsUser ={
name: "NIDHI",
"full name": "nidhi kumari",
[mySys]: "mykey1",
age : 19,
email:"nidhigoogle@gamil.com",
isLoggedIn: false,
lastLoginDays:["monday","saturday"] 


}

console.log(JsUser.email);
console.log(JsUser["name:"]);
console.log(JsUser["full name"]);
console.log( typeof JsUser[mySys]);




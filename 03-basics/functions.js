
function sayMyName(){

console.log("N")
console.log("I")
console.log("D")
console.log("H")
console.log("I")
}
//ayMyName()

// function addTwoNumbers(number1,Number2)
// {
//     console.log(number1 + Number2);
// }

function addTwoNumbers(number1,Number2)
{
  // let result = number1 + Number2
   //return result
   return number1 + number2
    
}


// addTwoNumbers(4,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(2,null)

// const result = addTwoNumbers(3,5)

// console.log("Result:",result);

function loginUserMessage(username="ndh")
{
   if(username === undefined)
    {
//console.log("pls enter the user nmae");
return 
   }
    return `${username} just logged in`
}
//console.log(loginUserMessage("nidhi"));
//console.log(loginUserMessage());




function calculateCartPrice(val1,val2,...num1){
return num1
}

//console.log(calculateCartPrice(200,400,500))
const user ={
    username: "nidhi",
    price: 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is $
        {anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "ndh",
    price: 500
})

const myNewArray = [200,400,600,800]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,600,1000]));

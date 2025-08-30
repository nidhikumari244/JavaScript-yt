
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
console.log("pls enter the user nmae");
return 
   }
    return `${username} just logged in`
}
//console.log(loginUserMessage("nidhi"));
console.log(loginUserMessage());
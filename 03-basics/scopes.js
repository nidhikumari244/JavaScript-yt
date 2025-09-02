let c = 400
 if (true) {
   const b = 10
    let c = 30
    //console.log("inner:" ,c);
    
}
    


//console.log(a);
//console.log(b);
//onsole.log(c);


function one(){
    const username ="nidhi"
    function two(){
        const website ="yt"
        console.log(username);
        
    }

//console.log(website);

two()  // if we comment this line it will not execute

}

//one()

if(true){
    const username ="nidhi"
    if(username === "nidhi")
    {
        const website =" yyt"
        //console.log(username+website);
        
    }
//  console.log(website); //not working
}
//console.log(username);  //not working


//++++++++++++++++++++++++

addone(6)
function addone(num){
    return num + 1

}

addTwo(6)
const addTwo = function(num){
    return num + 2
}


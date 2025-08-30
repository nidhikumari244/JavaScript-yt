//const tinderUser = new Object()    // Singleton obj

const tinderUser ={}         // Non - singleton obj.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "ndhgoogle.com",
    fullname: {
        userfullname:
        {
        firstname:"NIDHI",
        lastname:"KUMARI"
        }

    }
}
//onsole.log(regularUser.fullname.userfullname.firstname);

const obj1 ={ 1: "a",2:"b"}
const obj2 ={ 3: "a",4:"b"}
const obj4 ={5:"a", 6:"b"}

//const obj3 ={ obj1, obj2}

//onst obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2}
console.log (obj3);

const user= [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinder.hasOwnProperty('isLoggedIn'));

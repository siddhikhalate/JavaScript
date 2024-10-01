// #primitive 

// 7 types : String, Number,Boolearn, null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34556677667887532



// Reference(Non primitive)

// Array , objects , Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj={
    name:"siddhi",
    age:23,

}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);console.log(typeof scoreValue );

console.log(typeof myFunction);

// ****************************
// Stack(Primitive),Heap(Non-Primitive)

let myInstaname = "SiddhiKhalatecom"

let anothername = myInstaname
anothername = "chaiaurcode"
console.log(myInstaname);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo =userOne
userTwo.email="siddhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);


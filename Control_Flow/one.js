// if
// const isUserloggedIn = true
// const temperature = 41

// if( temperature === 41){
//   console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }
// console.log("Execute");

// < less than, > greater than , <= less than equal, >= greater than equal, == equal , != not equal , === type check krta hai , !== strict checking  anti pattern ye negative sign check krta hai
// 

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if(balance > 500)console.log("test");
// console.log("test2");

// if (balance < 500){
//   console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750");   
// }else{
//     console.log("less than 1200");
    
// }

const isUserloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFormEmail = true

if(isUserloggedIn && debitCard && 2==3){
  console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFormEmail ){
    console.log("User logged in");
    
}


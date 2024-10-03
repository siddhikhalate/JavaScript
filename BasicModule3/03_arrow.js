const user = {
    username:"siddhi",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcom to Website`);
        // this is used for the current context referance krta hai
        console.log(this);
        

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//interviwe que gobal object is window obj

// function chai(){
//     let username = "Siddhi"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "siddhi"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "siddhi"
//     console.log(this);
// }
// chai()

// basic arrow function
// const addTwo =(num1 , num2) =>{
//     return num1 + num2
// }

// const addTwo =(num1 , num2) => num1 + num2
//  const addTwo =(num1 , num2) => (num1 + num2)

const addTwo =(num1 , num2) => ({username:"Siddhi"})

     
 console.log(addTwo(3,4));

//  const myArray = [2,5,3,7,8]

//  myArray.forEach()

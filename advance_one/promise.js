// the promise object represents the eventual completion of an asynchronous operation and its resulting value
//A promise is in one of these states
// pending:initial state,neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected: meaning that the operation failed


const promiseOne = new Promise(function(resolve,reject){
    // Do an async 
    // DB calls, cryptography, network
    setTimeout(function(){
         console.log('Async task is compelete ');
         resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 reolved");
})
const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve({username:"siddhi",email:"siddhi@example.com"})
   },1000) 
})

promiseThree.then(function(user){
  console.log(user);
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"siddhi",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
 promiseFour.then((user)=>{
    console.log(user);
    return user.username 
}).then((username) =>{
  console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)  
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

const userEmail = []

if(userEmail){
    console.log("GOT user email");
}else{
    console.log("Dot't have user email");  
}
// falsy values
// interview ask

// false, 0 ,-0, BigInt 0n, "",null,undefined, NaN 

// truthy values
// "0",'false' ," " , [] ,{}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");  
// }

const emptyObj = {}
if(Object.keys(emptyObj)){
    console.log("Object is empty");
    
}
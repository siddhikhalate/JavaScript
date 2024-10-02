// var c = 300
// how to use scope in windows in browser right   click inspect 
// code enviorment node through check example are differnet scope
let a = 300

if(true){
    let a =10
    const b = 20
    console.log("INNER:",a);
    }
for(let i = 0; i<Array.length; i++){
    const element = Array[i];
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "siddhi"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);

     two()
}

// one()

if(true){
    const username = "siddhi"
    if(username === "siddhi"){
        const website ="  youtube"
        console.log(username + website);
        
    }
    // console.log(website);

}
// console.log(username);

// ++++++++++++++++interesting++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){
    return num +2
}
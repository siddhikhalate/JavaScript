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


console.log(a);
// console.log(b);
// console.log(c);



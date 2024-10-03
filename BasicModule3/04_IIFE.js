// Immediately Invoked Function Expressions (IIFE)
// interview  goble scope ke pollution se problem hoti same times us gobal scope ke jo variable  hai jo bhi declaration hai us pollution stop krnle keliy IIFE ka use hota hai
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('siddhi');
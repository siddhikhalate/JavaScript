//singleton
//object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Siddhi",
    "full name":"Siddhi Khalate",
    [mySym]:"mykey1",
    age:22,
    location:"Pune",
    email:"siddhi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "siddhi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "siddhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





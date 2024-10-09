// let myName = "Siddhi      "
// let myjob = "coding  "
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.siddhi = function(){
    console.log(`siddhi is present in all objects`);
    
}

Array.prototype.heysiddhi = function(){
    console.log(`siddhi says hello`);
    
}


// heroPower.siddhi()

myHeros.siddhi()
myHeros.heysiddhi()
// heroPower.heysiddhi()

//inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const teacher = {
    makeVideo:true
}
const techingsupport = {
    isAvailable:false
}
const TASupport = {
   makeAssignment:"js assignment",
   fullTime:true,
   __proto__:techingsupport
}
teacher.__proto__ =User

//modern syntax
Object.setPrototypeOf(techingsupport,teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
  
    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
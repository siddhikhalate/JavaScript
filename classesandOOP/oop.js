const user = {
    username : "siddhi",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("congratulation you are hired");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}
const userOne = new User("siddhi" ,16 , true)

console.log(userOne.constructor);

//new keyword
//new object create hota hai
//


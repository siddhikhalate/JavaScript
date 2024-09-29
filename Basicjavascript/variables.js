const accountId = 12345
let accountEmail = "siddhikhalate@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/





accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])

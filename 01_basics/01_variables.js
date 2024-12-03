const accountID = 145533
let accountEmail ="nikhil@123.com"
var accountPassword = "1235"
accountCity ="Jaipur"
let accountState;

// accountID = 2 not allowed
accountEmail ="hc@.com"
accountPassword ="555555"
accountCity = "shimla"
console.log(accountID);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
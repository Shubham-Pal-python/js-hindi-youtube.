const accountId = 144553
let accountEmail = "pal@gpay.com"
var accountPassport ="12345"
accountCity = "Jaipur" 
let accountState;

// accountId =2 // 

accountEmail = "l@.com"
accountPassport ="154735"
accountCity = "Jaunpur"

/*
prefer not to use var
because of issue in block code scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassport, accountCity,accountState]);

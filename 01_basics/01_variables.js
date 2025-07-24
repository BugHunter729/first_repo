const accountId = 144553
let accountEmail = "hites@google.com"
var accountPassword = "123344"
accountCity = "Jaipur"  
/*variable can be decalred without let,var or any but not safe*/
// accountId=2 not allowed
let accountState;
console.log("accountId")
accountEmail="kavya@gmail.com"
accountPassword="212121"
accountCity="BLR"
console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

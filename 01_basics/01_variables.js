const accountId = 144553
let accounEmail ="srutiranjan95@gmail.com"
var accountPassword = "12345"
accountCity = "Odisha"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sruti@sc.com"
accountPassword = "23456"
accountCity = "bbsr"

console.log(accountId);

/*
preafer not to use var
because of issue in block scope and functional scope   
*/


console.table([accountId, accounEmail, accountPassword, accountCity, accountState])
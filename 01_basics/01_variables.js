const accountId=12345
let accountEmail="harsh@gmail.com"
var accountPass="963852"
accountCity="Gurugram"

let accountState;
// accountId=2 // not allowed in js constants can't be changed

console.log(accountId);

accountEmail="ho@ho.com"
accountPass="123456"
accountCity="Noida"

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
/* note */
/* Don't use var keyword for declaring variables 
because it has an issue with block scope and functional scope */ 
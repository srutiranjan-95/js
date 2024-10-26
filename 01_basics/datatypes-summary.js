// Primitive

// 7 types : Stringf, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 12345678456789n


// Reference (Non primitive)

//Array, Objects, Functions

//=========================================================


//Stack (Primitive)

//Heap (Non-Primitive)

let myYoutubename = "bubu"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "sruti@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bubu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


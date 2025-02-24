// primitive

// 7 types : string, numbers, null, boolearn,undifined, symbol, bigint

const score = 100
const scorevalues = 100.3

const isLOggedIn = false

// reference (non primitive)

// array, objects, functions

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//STACK (primitive), HEAP (non-primitive)

let myYoutubename = "palbro.com"

let anothername = myYoutubename
anothername ="chai or code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@pay"
}

let userTwo = userOne

userTwo.email = "pal@google.com"

console.log(userOne.email);
console.log(userTwo.email);

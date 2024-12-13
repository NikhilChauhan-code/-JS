// const userLoggedIn = true;
const temprature = 50;
if (temprature < 50) {
    console.log("less then 50");
}
else if(temprature == 50){
    console.log("50 degree")
} else {
    console.log("greater then 50");
}

// const score = 200;

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// // console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("grater then 900");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true



if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
if (loggedInFromGoogle ) {
    console.log("User logged in from google");
} else if(loggedInFromEmail){
console.log("logged in from email")
}
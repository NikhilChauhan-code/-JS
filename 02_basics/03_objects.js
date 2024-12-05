//two ways to declare objects 1..literals 2..constructor
//singleton => when we declare constructor then we get singleton
// Object.create ==>this is constructor method
//object literals 

const MySym = Symbol("key1")
const JsUser ={
name: "Nikhil",
[MySym]: "key1",
age: 20,
"full Name": "Nikhil Chauhan",
location: "shimla",
email: "nikhil@google.com",
isLoggedIn: false,
lastLoginDays: ["monday", "saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.name);
// console.log(JsUser[MySym]);
// // console.log(JsUser.["fullName"]);
// console.log(JsUser["full Name"]);

JsUser.email = "Nikhil@123.com"
// Object.freeze(JsUser)
JsUser.email = "Nikhil@321.com"
// console.log(["email"])
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`hello Js user ${this.name}`)
}
console.log(JsUser.greeting2());
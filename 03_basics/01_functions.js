function sayMyName() {
 console.log("N")
 console.log("i")
 console.log("k")
 console.log("h")
 console.log("i")
 console.log("l")}
// sayMyName()
// console.log(sayMyName())



const func = function addTwoNumbers(number1, number2){
   console.log( number1 + number2)
}              // this function is same as below function i just put this function in variable name func
// func()                                //this print NAN
addTwoNumbers(4,5)                     //this print nothing
// console.log(addTwoNumbers(4,5))            //this print 9
// func(3, 5)                              //this print 8
// console.log(func(3, 5) )                             //this print 8 undefined
 function addTwoNumbers(number1, number2){
    let result = number1 + number2
    // console.log("nikhil")                  but this line will print nikhil because it is before return
    return result
console.log("Nikhil")                           //this line will never exicute after return
}


const resul = addTwoNumbers(3, 5)
// console.log(addTwoNumbers(3,5))                  //this also print 8
// console.log(resul)                         //this also print 8



function addTwoNumbers(number1, number2){
    return number1+ number2
}
addTwoNumbers(6, 6) // this will print nothing but if we declare it in variable like this 
let number = addTwoNumbers(5, 6)
// console.log("result:", number)    // this print result: 11
// console.log(number)               //this print 11
// console.log(addTwoNumbers(6, 6));   //this print 12


function loginUserMessage(username){
    return`${username} just Logged in`
}

// let name = (loginUserMessage("Nikhil"))
// console.log(loginUserMessage())
// console.log(name)


function loginUserMessage(username){
  
  if(username == undefined){
    console.log("please enter a username");
    return
}
  return`${username} just Logged in`
}

// console.log(loginUserMessage()) // this print please enter a username 
// console.log(loginUserMessage("hitesh")) //tis print hitesh just logged in

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))



const user = {
    username: "hitesh",
    prices: 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// function handleObject(user){
//    return `Username is ${user.username} and price is ${user.price}`;
//     console.log(`Username is ${user.username} and price is ${user.price}`);
// }

// console.log(handleObject(user))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    console.log(myNewArray[1]) 
    return getArray[1] 
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
// This is MDN example
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10                      
//  but in below example we just add 0 after }, 0) in the place of initialvalue this 0 work as accumelator 
// first is function example 2nd is arrow function example      



const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)   //1st way
console.log(priceToPay);

// const priceToPay = shoppingCart.reduce((acc, item) =>{ return acc + item.price}, 0)  // 2nd way
//console.log(priceToPay);

//const priceToPay = shoppingCart.reduce( function(acc, itemprice)  { 
//     return acc + itemprice.price }, 0)                                               // 3rd way

// console.log(priceToPay);
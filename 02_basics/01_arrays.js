//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.shift(2)
// myArr.unshift(2)

// console.log(myArr.includes(9));
// console.log(myArr2.indexOf(1));



const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


console.log("A", myArr);

const myn1 = myArr.slice(1, 4)
console.log("A", myn1)
// console.log("A", myn1.join())

console.log("B", myArr)

const myn2 = myArr.splice(2, 4)
console.log(myArr)
console.log("C", myn2)
console.log("A", myn1);
console.log(myArr);


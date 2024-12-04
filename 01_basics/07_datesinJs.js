//date
let myDate = new Date()


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());


console.log(typeof myDate);


let myCreatedDate = new Date(2023, 3, 10, 10, 5)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toISOString())
// console.log(myCreatedDate.toJSON())
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toString())
// console.log(myCreatedDate.toUTCString())

// let newdate = new Date("2024-11-14")

// console.log(newdate.toLocaleString())

let myNewDate =  new Date ("11-10-2024")

// console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMinutes());
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay() + 1);

// `${newdate.getDay()}  and the time is` 
newdate.toLocaleString('default', {
    weekday: "long",
})


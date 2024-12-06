// const tinderUser = new Object()


// const tinderUser = {
//     id : "123abc",
//     name : "Sammy",
//     isLoggedIn : false}

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.firstname.lastname);


const obj1 = { 1: "a",2: "b"}
const obj2 = { 3: "a",4: "b"}
const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({},obj1,obj2) // so in this {} is target and obj1, obj2 are the source
const obj5 = {...obj1, ...obj2};



// console.log(obj3)
// console.log(obj4)
// console.log(obj5)
//they show same result
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } const obj3 = Object.assign(obj1, obj2)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } const obj4 = Object.assign({},obj1,obj2)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } const obj5 = {...obj1, ...obj2}

const user = [
    {
        id: 1,
        email: "nikhil@gmail.com"
    },
    {
        name: "nikhil",
      email2: "nikhil@gmail.com"
    },
    {
        state: "HP",
        Pincode: 123456, 
    },
    
]
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(regularUser)
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

// console.log(tinderUser.hasOwnProperty('isLoggedin'))
// console.log(tinderUser.hasOwnProperty('isLogged'))
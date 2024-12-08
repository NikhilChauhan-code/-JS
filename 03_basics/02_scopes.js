//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
one()

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
     username + website
        console.log(username + website);
    }
    // console.log(website);
}


console.log(addone(6))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}                                           // in this expression function you cannot access addTwo before initializing 
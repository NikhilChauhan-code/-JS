const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )                            //  you can write anything inside function paranthesis whatever you want to here it is val you can write anything item, name etc

coding.forEach( (item) => {
    // console.log(item);
} )                           // this exampke in arrow function 

function printMe(val){
    // console.log(val);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )
// myCoding.forEach( (item, index, arr) => {
    
//     console.log(item.languageName, index, arr);
//     console.log(item.languageFileName, index, arr)
    
// } )
// myCoding.forEach( (item, index, ) => {
    
//     console.log(item.languageName, index, );
//     console.log(item.languageFileName, index, )
// } )
// myCoding.forEach( (item,  arr) => {
    
//     console.log(item.languageName,  arr);
// } )
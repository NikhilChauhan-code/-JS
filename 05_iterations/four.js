//for in

const myobj = {
    js: 'javascript',
    cpp: 'C##',
    rb: 'ruby',
    swift: "swift by apple",

}

// for (const key in myobj) {
//     console.log(myobj[key])
// }
for (const key in myobj) {
//   console.log(`${key} shortcut is for ${myobj[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(`${key} shortcut is for ${programming}`)       this is not printing requred thing
}
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
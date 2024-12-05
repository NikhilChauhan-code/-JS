const marvelHeros = ["Thor", "Iranman", "Spiderman"]
const DCHeros = ["superman", "flash", "batman"]


// marvelHeros.push(DCHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros.concat(DCHeros))


const allNewHero = [...marvelHeros,...DCHeros]
// console.log(allNewHero)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(another_array.flat(Infinity))

// console.log(Array.isArray("nikhil")) 
// console.log(Array.from("nikhil")) 
// console.log(Array.from({name: "nikhil"})) 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// console.log(Array.from("score1", "score2", "score3"));
// console.log(Array.from("score1, score2, score3"));
console.log([score1, score2, score3])
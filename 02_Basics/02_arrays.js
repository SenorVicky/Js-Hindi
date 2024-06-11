const marvelHeroes=["Thor","IronMan","SpiderMan"]

const dcHeroes=["SuperMan","Flash","Batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)

// const newVar=marvelHeroes.concat(dcHeroes)
// console.log(newVar)

// const allNewHeroes=[...marvelHeroes,...dcHeroes]
// console.log(allNewHeroes)

// const anoArr=[1,2,4,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArr=anoArr.flat(Infinity)
// console.log(realAnotherArr)

console.log(Array.isArray("Vikash"))
console.log(Array.from("Vikash"))
console.log(Array.from({name:"Vikash"})) //interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

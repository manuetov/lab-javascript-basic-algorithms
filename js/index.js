// Iteration 1: Names and Input
let hacker1 = "Anacleto"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mari Carmen"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
   console.log(`${hacker1} agente secreto `)
} else if (hacker2.length > hacker1.length){
   console.log(`${hacker2} es más largo, tiene ${hacker2.length} caracteres`)
} else {
   console.log('los nombres tienen el mismo número de caracteres')
}

// Iteration 3: Loops

var name = hacker1.toUpperCase()
var nspace = " "
for (let i=0; i < name.length; i++){
   nspace += name[i] + " "
}
console.log(nspace)

var nInvert = ""

for (let i = hacker2.length -1; i >= 0; i--){
   nInvert += hacker2[i]
}
console.log(nInvert)








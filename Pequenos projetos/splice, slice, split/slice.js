//Slice por ser usado tanto em arrays quanto strings

let word = 'Hello, world'
let numbers = [0, 1, 2, 3, 4, 5]

//(ponto inicial, ponto final)
let strWord = word.slice(0,5)
let arrNumbers = numbers.slice(0,3)


console.log(`${strWord}`)
console.log(`${arrNumbers}`)

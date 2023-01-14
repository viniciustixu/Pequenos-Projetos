//Splice pode ser usado apenas em arrays
let arr = [2, 4, 6, 8, 12, 25, 32]
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// (index inicial, quantidade de elementos removida, elementos que serão adicionados)
arr.splice(arr.length - 1, 1, 'a', 'b' ,'c')

arr2.splice(3, arr2.length)

arr3.splice(0, arr3.length - 3)

console.log(`${arr}`)
console.log(`${arr2}`)
console.log(`${arr3}`)
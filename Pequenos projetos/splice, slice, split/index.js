let arr = [2, 4, 6, 8, 12, 25, 32]


// (index inicial, quantidade de elementos removida, elementos que serão adicionados)
arr.splice(arr.length - 1, 1, 'a', 'b' ,'c')

console.log(`${arr}`)
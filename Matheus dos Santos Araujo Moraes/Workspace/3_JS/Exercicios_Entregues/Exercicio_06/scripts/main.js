// Exercicio 1
console.log('Exercicio 1:')

let arr1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]

let arr2 = arr1.toString()

let arr3 = arr1.join(' / ')

console.log(`Todo Array é: ${arr1}`)

console.log('Tamanho do Array: ' + arr1.length)

console.log('Retornando apenas JS: ' + arr1[6])

console.log('O tipo do Array 1 é: ' + typeof arr2)

console.log('Trocando o separador por Barra: ' +  arr3)

let arr4 = arr1.unshift('IOS')

console.log(`Adicionando IOS no inicio Aray ficam: ${arr4} posições e a string fica: ` + arr1)

// Exercicio 2
console.log('Exercicio 2:')

let arrb1 = [
   ['HTML', 1993, 'CSS', 1996],
   ['Bootstrap', 2011, 'JS',1995],
   ['React', 2013,'Java', 1995],
]

console.log(`Todo Array é: ${arrb1}`)

console.log('Tamanho do Array: ' + arrb1.length)

console.log('Retornando apenas: ' + (arrb1[2][1]))

console.log('Substituindo JS por JavaScript (Antes): ' + arrb1[1][2])

arrb1[1][2] = 'JavaScript'

console.log('Substituindo JS por JavaScript (Depois): ' + arrb1[1][2])

console.log('Removendo Java do Array (Antes): ' + arrb1)

delete arrb1[2][2]

console.log('Removendo Java do Array (Depois): ' + arrb1)

let arrb2 = arrb1.push('pipoca')

console.log('inserindo Pipoca final Array: ' + arrb1)



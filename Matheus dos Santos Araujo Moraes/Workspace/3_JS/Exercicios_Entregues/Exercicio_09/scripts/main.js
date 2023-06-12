// Exercício 1

const arr1 = [17, 43, 8, 4, 97, 56, 29, 40]

arr1.forEach(verifParImpar)

function verifParImpar(valor) {
    if (valor % 2 === 0){
        console.log(valor + ' é par')
    } else {
        console.log(valor + ' é impar')
    }
}

// Exercicio 2

 const arr2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 96]

 let filtronum1 = arr2.filter((arr2) => {
    return arr2 > 20 && arr2 < 80;
 })

 console.log(filtronum1)
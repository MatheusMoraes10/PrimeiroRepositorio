

let ex1 = 0
let ex2 = 10
let ex3 = '';

console.log(`Vamos contar até 50:`)

while(ex1 <= 50){
    console.log(`Número: ${ex1}`)
    ex1++
}

console.log(`Vamos contar do 10 até 0:`)

do {
    console.log(`Número: ${ex2}`)
    ex2 -= 1
} while(ex2 >= 0)

console.log(`Os números pares de 1 até 100 são:`)

for(ex3 = 2; ex3 <= 100; ex3 += 2){
    console.log(`Número: ${ex3}`)
}

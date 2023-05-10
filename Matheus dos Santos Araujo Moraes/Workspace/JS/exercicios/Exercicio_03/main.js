let t1 = "A quantidade de letras é: "

let t2 = "Os três primeiros caracteres: "

let t3 = "Em caixa baixa: "

let t4 = "Removendo os espaços..."

let f1 = "   Banana"
console.log(f1)
console.log(t4)
f1 = f1.replace(f1, f1.trim())
f1 = f1.replace(f1, f1.toLowerCase())
console.log(f1)
console.log(t1 + f1.length)

let f2 = "Tomate"
console.log(f2)
console.log(t1 + f2.length)
console.log(t2 + f2.substring(0, 3))
f2 = f2.replace(f2, f2.toLowerCase())
console.log(t3 + f2)

let f3 = "Manga"
console.log(f3)
console.log(t1 + f3.length)
console.log(t2 + f3.substring(0, 3))
f3 = f3.replace(f3, f3.toLowerCase())
console.log(t3 + f3)

let f4 = "Amora"
console.log(f4)
console.log(t1 + f4.length)
console.log(t2 + f4.substring(0, 3))
f4 = f4.replace(f4, f4.toLowerCase())
console.log(t3 + f4)

let f5 = "Laranja"
console.log(f5)
console.log(t1 + f5.length)
console.log(t2 + f5.substring(0, 3))
f5 = f5.replace(f5, f5.toLowerCase())
console.log(t3 + f5)

console.log(`O template das frutas: 
Fruta 1: ${f1}\nFruta 2: ${f2}\nFruta 3: ${f3}\nFruta 4: ${f4}\nFruta 5: ${f5}`)


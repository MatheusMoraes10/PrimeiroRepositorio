console.clear();

let a = 3
let b = 4
let c = -5
const delta = b * b - 4 * a * c;
const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);

alert(`Bem vindo a pagina, clicando no botão realiza um calculo de 2° grau`);

const calculo2 = () => {
alert(`A Equação de 2° grau de 3, 4 e -5 é: ${x1} e ${x2}`);
};

function alterarBackgroundColor() {
    var lista = document.getElementById('minhaLista');
    lista.style.backgroundColor = 'lightblue';
}
function alterarFontWeight() {
    var elementos = document.getElementsByClassName('lista');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.fontWeight = 'bold';
    }
}
function aplicarEfeitoZebrado() {
    var items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
            items[i].classList.add('zebrado');
        } else {
            items[i].classList.remove('zebrado');
        }
    }
}

function incluirBorderBottom() {
    var elementos = document.getElementsByName('lista1');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.borderBottom = '1px solid black';
    }
}
function removerElemento() {
    var lista = document.getElementById('minhaLista');
    lista.removeChild(lista.lastElementChild);
}
function recuperarElemento() {
    var lista = document.getElementById('minhaLista');
    var novoElemento = document.createElement('li');
    novoElemento.textContent = 'item recuperado';
    lista.insertBefore(novoElemento, lista.firstElementChild);
}
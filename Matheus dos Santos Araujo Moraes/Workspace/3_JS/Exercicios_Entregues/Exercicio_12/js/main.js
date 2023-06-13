function calcular() {

    document.getElementById("tabuada").innerHTML = "";

    var valor = parseInt(document.getElementById("valor").value);

    var tabela = document.createElement("table");

    for (var i = 1; i <= 10; i++) {
        var resultado = valor * i;

        var linha = tabela.insertRow();

        var celula1 = linha.insertCell();
        var celula2 = linha.insertCell();

        celula1.innerHTML = valor + " x " + i + " =";
        celula2.innerHTML = resultado;
    }

    document.getElementById("tabuada").appendChild(tabela);
}

var inscritos = [];

function incluirParticipante() {
    var nome = document.getElementById('nome').value;
    var dataNasc = document.getElementById('dataNasc').value;
    var email = document.getElementById('email').value;

    var dataNascimento = new Date(dataNasc);
    var dataAtual = new Date();
    var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    if (dataAtual.getMonth() < dataNascimento.getMonth() ||
        (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailValido = emailRegex.test(email);

    if (idade >= 18 && emailValido) {
        var item = Math.floor(Math.random() * 10000) + 1;

        var participante = {
            item: item,
            nome: nome,
            dataNasc: dataNasc,
            email: email
        };
        inscritos.push(participante);

        document.getElementById('nome').value = '';
        document.getElementById('dataNasc').value = '';
        document.getElementById('email').value = '';
        exibirInscritos();
    } else {
        alert("Para se inscrever, você deve ser maior de 18 anos e fornecer um e-mail válido.");
    }
}

function excluirParticipante() {
    var item = document.getElementById('item').value;

    var indice = -1;
    for (var i = 0; i < inscritos.length; i++) {
        if (inscritos[i].item == item) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        inscritos.splice(indice, 1);
        exibirInscritos();
    } else {
        alert("O código de item informado não corresponde a nenhum inscrito.");
    }

    document.getElementById('item').value = '';
}
function exibirInscritos() {
    var listaInscritos = document.getElementById('listaInscritos');
    listaInscritos.innerHTML = '';
    for (var i = 0; i < inscritos.length; i++) {
        var participante = inscritos[i];

        var itemElemento = document.createElement('span');
        itemElemento.innerHTML = 'Item: ' + participante.item + '<br>';

        var nomeElemento = document.createElement('span');
        nomeElemento.innerHTML = 'Nome: ' + participante.nome + '<br>';

        var dataNascElemento = document.createElement('span');
        dataNascElemento.innerHTML = 'Data de Nascimento: ' + participante.dataNasc + '<br>';

        var emailElemento = document.createElement('span');
        emailElemento.innerHTML = 'E-mail: ' + participante.email + '<br>';

        var participanteElemento = document.createElement('li');
        participanteElemento.appendChild(itemElemento);
        participanteElemento.appendChild(nomeElemento);
        participanteElemento.appendChild(dataNascElemento);
        participanteElemento.appendChild(emailElemento);
        listaInscritos.appendChild(participanteElemento);
    }
}
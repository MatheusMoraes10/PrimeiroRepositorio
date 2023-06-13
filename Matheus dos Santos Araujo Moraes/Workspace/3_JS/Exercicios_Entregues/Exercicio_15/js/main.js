function realizarLogin() {
    var usuario = document.getElementById('usuario').value.toUpperCase();
    var senha = document.getElementById('senha').value;
    var cargo = document.getElementById('cargo').value;
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var senhaValida = senhaRegex.test(senha);
    if (senhaValida) {
        var cargoTexto = '';
        switch (cargo) {
            case '1':
                cargoTexto = 'Estagiário';
                break;
            case '2':
                cargoTexto = 'Trainee';
                break;
            case '3':
                cargoTexto = 'Analista';
                break;
            case '4':
                cargoTexto = 'JR';
                break;
            case '5':
                cargoTexto = 'SN';
                break;
            case '6':
                cargoTexto = 'PL';
                break;
            case '7':
                cargoTexto = 'Líder Técnico';
                break;
            case '8':
                cargoTexto = 'CEO';
                break;
        }
        alert('Olá, ' + usuario +', seu cargo é ' + cargoTexto + '. Vamos te redirecionar para a página desejada.');
    } else {
        alert('Senha inválida. A senha deve ter no mínimo 8 caracteres e conter pelo menos um caractere especial, um número e uma letra maiúscula.');
    }
}
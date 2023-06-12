class Pessoa {
    constructor(nome, dataNascimento) {
      this.nome = nome;
      this.dataNascimento = new Date(dataNascimento);
    }
  
    getIdade() {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear();
      const mesAtual = hoje.getMonth();
      const diaAtual = hoje.getDate();
  
      const anoNascimento = this.dataNascimento.getFullYear();
      const mesNascimento = this.dataNascimento.getMonth();
      const diaNascimento = this.dataNascimento.getDate();
  
      let idade = anoAtual - anoNascimento;
  
      if (
        mesAtual < mesNascimento ||
        (mesAtual === mesNascimento && diaAtual < diaNascimento)
      ) {
        idade--;
      }
  
      return idade;
    }
  }
  
  // Array de pessoas
  const pessoas = [
    {
        nome: 'Ana',
        dataNascimento: '1985-09-27', 
    },
    {
        nome: 'Boleano',
        dataNascimento: '1972-03-15', 
    },
    {
        nome: 'Calisto',
        dataNascimento: '1995-07-12', 
    },
    {
        nome: 'Dario',
        dataNascimento: '1955-01-02', 
    },
    {
        nome: 'Erivelton',
        dataNascimento: '1985-11-29', 
    },
    {
        nome: 'Friston',
        dataNascimento: '1962-07-23', 
    },
    {
        nome: 'Garison',
        dataNascimento: '1988-05-21', 
    },
    {
        nome: 'Histon',
        dataNascimento: '1972-03-15', 
    },
    {
        nome: 'lovely',
        dataNascimento: '1972-03-15', 
    },
    {
        nome: 'Humae',
        dataNascimento: '1972-03-15', 
    },
  ];
  
  // método getNiver por prototype
  Pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();
  
    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
      return true; // fez aniversário nesse ano
    } else {
      return false; // Ainda não fez aniversário esse ano
    }
  };
  
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const instanciaPessoa = new Pessoa(pessoa.nome, pessoa.dataNascimento);
    const idade = instanciaPessoa.getIdade();
    const fezAniversario = instanciaPessoa.getNiver() ? "já" : "ainda não";
  
    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário esse ano.`);
  }
  
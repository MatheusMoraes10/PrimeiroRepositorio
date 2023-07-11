import React, { useState } from 'react';
import './App.css';
import BotaoAdicionar from './Components/BotaoAdicionar';

function App() {
  const [conteudo, setConteudo] = useState([]);

  const adicionarElemento = () => {
    const novoConteudo = [...conteudo];
    novoConteudo.push(`Elemento ${novoConteudo.length + 1}`);
    setConteudo(novoConteudo);
  };

  return (
    <div className="App">
      <h2> Exemplo Título</h2>
      <section>
        <p>Conteúdo fixo 1</p>
        <p>Conteúdo fixo 2</p>
        {conteudo.map((elemento, index) => (
          <p key={index}>{elemento}</p>
        ))}
      </section>
      <footer>Rodapé</footer>
      <BotaoAdicionar adicionarElemento={adicionarElemento} />
    </div>
  );
}

export default App;

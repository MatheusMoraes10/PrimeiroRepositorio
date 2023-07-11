import React, { useState } from 'react';
import './App.css';
import Nota from './Components/Nota';
import Nome from './Components/Nome';

function App() {
  const [nomeAluna, setNomeAluna] = useState('Ferdinando');
  const notas = [8, 7.5, 9, 6.5];

  const calcularMedia = () => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    return media.toFixed(2);
  };

  return (
    <div className="App">
      <Nome nome={nomeAluna} />
      <Nota notas={notas} media={calcularMedia()} />
    </div>
  );
}

export default App;

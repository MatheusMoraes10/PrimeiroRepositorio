import React from 'react';

const Nota = ({ notas, media }) => {
  return (
    <div>
      <h2>Notas do Aluno</h2>
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>Nota {index + 1}: {nota}</li>
        ))}
      </ul>
      <p>Média: {media}</p>
    </div>
  );
};

export default Nota;

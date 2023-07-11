import React from 'react';

const IMCResult = ({ imc }) => {
  return (
    <div>
      {imc ? (
        <p>O seu IMC é: {imc}</p>
      ) : (
        <p>Preencha os campos para calcular o IMC.</p>
      )}
    </div>
  );
};

export default IMCResult;

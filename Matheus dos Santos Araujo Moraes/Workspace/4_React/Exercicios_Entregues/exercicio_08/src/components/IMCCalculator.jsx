import React from 'react';

const IMCCalculator = ({
  weight,
  height,
  setWeight,
  setHeight,
  calculateIMC,
  clearFields
}) => {
  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <label>
        Peso (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Altura (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button onClick={calculateIMC}>Calcular IMC</button>
      <button onClick={clearFields}>Limpar campos</button>
    </div>
  );
};

export default IMCCalculator;

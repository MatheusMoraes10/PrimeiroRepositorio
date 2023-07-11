import React, { useState } from 'react';
import './App.css';
import IMCCalculator from './components/IMCCalculator';
import IMCResult from './components/IMCResult';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);

  const calculateIMC = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedIMC = weight / (heightInMeters * heightInMeters);
      setIMC(calculatedIMC.toFixed(2));
    }
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setIMC(null);
  };

  return (
    <div className="App">
      <IMCCalculator
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        calculateIMC={calculateIMC}
        clearFields={clearFields}
      />
      <IMCResult imc={imc} />
    </div>
  );
};

export default App;

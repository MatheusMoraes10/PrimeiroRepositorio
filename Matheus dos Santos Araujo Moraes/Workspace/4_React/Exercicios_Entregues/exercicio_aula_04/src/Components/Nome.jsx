import React from 'react';
import './Nome.css';

const Nome = ({ nome }) => {
  return (
    <div className="nome-container">
      <h1>{nome}</h1>
    </div>
  );
};

export default Nome;

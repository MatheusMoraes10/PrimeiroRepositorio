import React from 'react';

const Sobre = () => {
    const estilo = {
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '20px',
    };

    return (
        <article style={estilo}>
            <h2>Sobre o React</h2>
            <p>O React é uma biblioteca JavaScript para a construção de interfaces de usuário.</p>
        </article>
    );
};

export default Sobre;

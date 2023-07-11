import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
    const estilo = {
        backgroundColor: 'lightblue',
        color: 'white',
        padding: '20px',
    };

    return (
        <section style={estilo}>
            <h1>Bem-vindo, {props.nome}!</h1>
            <p>Seja bem-vindo ao meu site.</p>
        </section>
    );
};

BoasVindas.defaultProps = {
    nome: 'Visitante',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};

export default BoasVindas;

import PropTypes from 'prop-types';

function Saudacao({ nome, idade }) {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Idade: {idade}</p>
    </div>
  );
}

// Definindo os tipos das props
Saudacao.propTypes = {
  nome: PropTypes.string.isRequired,  // nome deve ser uma string e é obrigatório
  idade: PropTypes.number             // idade deve ser um número
};

// Definindo valores padrão para as props
Saudacao.defaultProps = {
  idade: 18,  // Se idade não for passada, o valor padrão será 18
};

export default Saudacao;

/*
PropTypes.string:  Indica que a prop deve ser uma string.
PropTypes.number:  Indica que a prop deve ser um número. 
PropTypes.bool:  Indica que a prop deve ser um valor booleano. 
PropTypes.array:  Indica que a prop deve ser um array. 
PropTypes.object:  Indica que a prop deve ser um objeto.,
PropTypes.func:  Indica que a prop deve ser uma função. 
PropTypes.element: Indica que a prop deve ser um elemento React.
 */
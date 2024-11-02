import PropTypes from 'prop-types';

const PropTypesArray = ({user}) => {
  return (
    <div>
       <h1>{user.name}</h1>
       <p>Email:{user.email}</p>
       <p>Idade:{user.age}</p>
    </div>
  )
}

{/*O PropTypes.shape no React serve para validar 
que a propriedade que está sendo passada para o 
componente é um objeto com uma estrutura específica */}

PropTypesArray.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number
    })
};


export default PropTypesArray

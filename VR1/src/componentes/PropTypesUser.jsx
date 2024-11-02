import PropTypes from 'prop-types'


function UserProfile(user) {
    return(
        <div>
            <h1>Nome: {user.nome}</h1>
            <p>Email: {user.email}</p>
            <p>Idade: {user.age}</p>
        </div>
    )
}

UserProfile.propTypes = {
    user: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number
    })
}

export default UserProfile
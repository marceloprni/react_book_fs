

function HelloMother({nome}) {
    return <h1>Olá, {nome}!</h1>
}

HelloMother.defaultProps = {
    nome: 'visitante'
}

export default HelloMother;



function Greeting() {
    const userName = 'marcelo'
    const sobreNome = 'perini'
    const isTooger = true
    return <h1>{isTooger ? `Hello, ${userName}` : `Good By ${sobreNome}` }</h1>
}

export default Greeting;
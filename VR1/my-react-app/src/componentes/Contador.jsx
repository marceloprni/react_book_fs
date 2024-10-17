import React from 'react'

const Contador2 = () => {
    const [contador, setContador] = React.useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }
  return (
    <div>
        <p>Contagem:{contador}</p>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Contador2

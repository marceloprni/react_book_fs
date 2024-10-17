
import React, {useState} from 'react'

const Dobrador = () => {

  const [numero, setNumero] = useState(1)

  const dobra = () => {
     setNumero(numeroAnterior => numeroAnterior * 2)
  }


  return (
    <div>
      <p>Número: {numero}</p>
      <button onClick={dobra}>Dobrar</button>
    </div>
  )
}

export default Dobrador

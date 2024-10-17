

import Reac, {useState} from 'react'

const Alternador = () => {

  const [ texto, setTextoPadrao ] = useState('Texto A');

  const alternarTexto = () => {
    setTextoPadrao( textoPadrao => textoPadrao  === 'Texto A'? 'Texto B' : 'Texto A' );
  }

  return (
    <div>
      <p>{texto}</p>
      <button onClick={alternarTexto}>Alterar Texto</button>
    </div>
  )
}

export default Alternador

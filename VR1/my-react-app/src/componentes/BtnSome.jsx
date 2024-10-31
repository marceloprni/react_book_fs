

import React, {useState} from 'react'

const BtnSome = () => {
   
    const [formato, setFormato] = useState(true)

    const alterarTema = () => {
        setFormato(!formato); 
    }

  return (
    <div>
        <p  style={{ display:formato === true ? 'block' : 'none' }}>O tema atual</p>
        <button onClick={alterarTema}>Alternar Tema</button>
    </div>
  )
}

export default BtnSome

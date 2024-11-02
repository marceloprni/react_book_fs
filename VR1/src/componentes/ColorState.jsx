
import React, { useState } from 'react'

const ColorState = () => {
 
    const [color, setColor] = useState('claro')

    const alterarTema = () => {
        console.log(color)
        setColor(color === 'claro'? 'escuro' : 'claro')
    }

  return (
    <div style={{ backgroundColor:color === 'claro' ? '#fff' : '#333', color: color === 'claro' ? '#000' : '#fff' }}>
        <p>O tema atual é {color}</p>
        <button onClick={alterarTema}>Alternar Tema</button>
    </div>
  )
}

export default ColorState

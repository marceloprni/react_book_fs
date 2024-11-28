


import { useState } from 'react'

const Exe2 = () => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('valor inserido:' + inputValue)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Exe2
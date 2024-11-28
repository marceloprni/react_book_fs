import React, { useState } from 'react'

const VerificarEmail = () => {

    const [ email, setEmail ] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [fruta, setFruta] = useState('maça');
    const [ aceitaTermos, setAceitaTermos] = useState(false);
    const [cor, setCor] = useState('vermelho');

    const handleChange = (e) => {
        const newEmail = e.target.value

        setEmail(newEmail);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
        setIsEmailValid(emailRegex.test(newEmail));

    }

    const handleCheckboxChange = () => {
        setAceitaTermos(!aceitaTermos);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('A fruta é ' + fruta);
        console.log('Aceita termos: ', aceitaTermos, cor);
        alert(`E-mail enviado: ${email}`)

    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            E-mail:
        < input
        type="text" 
        value={email} 
        onChange={handleChange} 
        style={{ borderColor: isEmailValid? 'green' :'red' }} />
        </label>

        <select value={fruta} onChange={(e) => setFruta(e.target.value)}>
            <option value="maça">Maçã</option>
            <option value="banana">Banana</option>
            <option value="uva">Uva</option>
        </select>

        <input type="checkbox" checked={aceitaTermos} onChange={handleCheckboxChange} />

        <label>
            Vermelho 
            <input type="radio" value="vermelho" checked={cor === "vermelho"} onChange={(e) => setCor(e.target.value)} />
        </label>

        <label>
            Azul 
            <input type="radio" value="azul" checked={cor === "azul"} onChange={(e) => setCor(e.target.value)} />
        </label>

        <button type="submit" disabled={!isEmailValid}>Enviar</button>
    </form>
  )
}

export default VerificarEmail


import React, { useState } from 'react';

const EmailExer = () => {
    // Cria um estado para armazenar o valor do input
    const [inputValue, setInputValue] = useState('');

    // Função para lidar com a mudança no input
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
      event.preventDefault(); // Evita o recarregamento da página
      console.log(inputValue); // Exibe o valor do input no console
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Digite algo..." 
        />
        <button type="submit">Enviar</button>
      </form>
    );
}

export default EmailExer

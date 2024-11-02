

import React, {useState, useEffect} from 'react'

const CarregarDados = () => {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.exemplo.com/dados');
            const result = await response.json();
            setDados(result);
            }
        fetchData();
        },[])

  return (
    <div>
        {dados ? <p> Dados carregados: {dados}</p>: <p>Carregando...</p>}
    </div>
  )
}

export default CarregarDados

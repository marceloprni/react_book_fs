import { useState } from 'react';

function Mensagem(props) {
    return <p>{props.texto}</p>
}

function AppWorld() {

    const [texto, setTexto] = useState("Olá mundo");

    const handleChange = () => {
        setTexto('terra');
    }

    return (
        <div>
            <Mensagem texto={texto} />
            <button onClick={handleChange}>Alterar Texto</button>
        </div>
    )

}


export default AppWorld
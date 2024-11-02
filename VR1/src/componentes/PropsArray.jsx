

function PropsArray(prop) {
    return ( 
        <div>
            <ul>
                {prop.frutas.map((fruta, id) => <li key={id}>{fruta}</li>)}
            </ul>
            <p>{prop.pessoa.nome} tem {prop.pessoa.idade} anos.</p>
        </div>
     );
}

export default PropsArray;
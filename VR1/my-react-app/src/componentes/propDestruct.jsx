const propsbutton = {tipo: "button", children: "Clique Aqui"}
const propsButton2 = {type: "button"};

function SaudacaoParatodos({nome}) {
        return <h1>{nome}</h1>
}

function SaudacaoParaAll(props) {
    const { nome } = props;
    const mensgame = `Olá, ${nome}`
    return <div>
        <h1>{mensgame}</h1>

         {/* <button tipo="button">Clique aqui</button> = ...propsbutton */}
        <button {...propsbutton}/>

        <button {...propsButton2} onClick={() => alert('Clicado!')}>Clique aqui 2</button>
    </div>
}






export {
    SaudacaoParatodos,
    SaudacaoParaAll
} 

const Exe1 = () => {

    const handleClick = (event) => {
        // Exibe o objeto de evento no console
        console.log('Objeto de evento:', event);
        
        // Mostra um alerta ao usuário
        alert('Botão clicado!');
      };


  return (
    <div>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Exe1



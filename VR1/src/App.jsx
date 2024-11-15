import { useState} from 'react';
import './App.css'
import Greeting from './componentes/Greeting'
import AlertButton from './componentes/handleClick'
import Props from './componentes/Props'
import PropsArray from './componentes/PropsArray'
import Contador from './componentes/UpdateState';
import Saudacao from './componentes/PropTypes';
import AppWorld from './componentes/OlaWord';
import UserProfile from './componentes/PropTypesUser';
import NumberList from './componentes/PropTypesNumberList';
import ButtonTypes from './componentes/buttonEnums';
import HelloMother from './componentes/propTypesDefault';
import DesSaude from './componentes/propTypesDescruct';
import { SaudacaoParatodos, SaudacaoParaAll } from './componentes/propDestruct';
import PropTypesArray from './componentes/PropTypesArray';
import Contador2 from './componentes/Contador';
import Dobrador from './componentes/Dobrador';
import Alternador from './componentes/Alternador';
import Multiplicador from './componentes/Multiplicador';
import ColorState from './componentes/ColorState';
import BtnSome from './componentes/BtnSome';
import ListaTarefa from './componentes/ListaTarefa';
import CarregarDados from './componentes/fetchData';
import ComponenteHook from './componentes/ComponenteHook';
import ComponenteHook2 from './componentes/ComponenteHook2';
import Formulario from './componentes/Formulario';

function App() {
  const frutas = ['maça', 'banana', 'laranja']
  const pessoa = {nome: 'marcelo', idade: 30}
  const AgeNumber = [1,2,3,5,6]

  const [texto, setTexto] = useState('olá mundo!');

  function Mensagem(props) {
      return <p>{props.texto}</p>
  }

  const handleChange = () => {
     setTexto('texto alterado')
  }


  return (
    <div className='app'>
      <h1>Bem vindo ao nosso projeto react com Vite!</h1>
      <p>Esta é a nossa primeira interação com o React</p>
      <Greeting/>
      <AlertButton/>
      <Props name={'Marcelo'} sobrenome={'Perini'}/>
      <PropsArray frutas={frutas} pessoa={pessoa} />
      <Mensagem texto={texto} />
      <button onClick={handleChange}>Alterar Texto</button>,
      <Contador />
      <Saudacao nome={'marcelo'}/>
      <AppWorld text={'vejo como isso e bom'}/>
      <UserProfile nome={'larissa'} email={'lari@gmail.com'} age={23} />
      <NumberList numbers={AgeNumber}/>
      <ButtonTypes type={'submit'}/>
      <HelloMother />
      <DesSaude />
      <SaudacaoParaAll nome={'marcelo'}/>
      <PropTypesArray user={pessoa} />
      <Contador2 />
      <Dobrador />
      <Alternador />
      <Multiplicador />
      <ColorState />
      <BtnSome />
      <ListaTarefa/>
      <CarregarDados/> 
      <ComponenteHook/>
      <ComponenteHook2/>
      <Formulario />
   </div>
  )
  
}


export default App

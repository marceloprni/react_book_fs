import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { SaudacaoParaAll } from './componentes/propDestruct';
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
import ComponentePai from './componentes/ComponentePai';
import Exe1 from './componentes/Exe1';
import Exe2 from './componentes/Exe2';
import FormularioDuplo from './componentes/FormularioDuplo';
import VerificarEmail from './componentes/VerificarEmail';

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
      <Router>
        <Routes> {/* Use Routes component to wrap Route components */}
          <Route path="/" element={<Dobrador />} />
        </Routes>
      </Router>
    </div>
  )
  
}


export default App

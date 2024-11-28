


import {useState} from 'react'

const FormularioDuplo = () => {

    const [formValues, setFormValues] = useState({campo1: "", campo2: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Campo 1: ${formValues.campo1}, Campo 2: ${formValues.campo2}`);
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <input type="text" name="campo1" value={formValues.campo1} onChange={handleChange} />
        <input type="text" name="campo2" value={formValues.campo2} onChange={handleChange} />
        <button type="submit">Enviar</button>
     </form> 
    </div>
  )
}

export default FormularioDuplo

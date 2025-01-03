import React, { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value)
    setNome(event.target.value);
  };

  return (
    <form>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
    </form>
  );
}

export default Formulario;

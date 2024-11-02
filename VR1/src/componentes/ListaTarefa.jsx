

import React, { useState } from 'react'

const ListaTarefa = () => {

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')

    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            setTarefas([...tarefas, novaTarefa])
            setNovaTarefa('')
        }
    }


  return (
    <div>
      <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTarefa

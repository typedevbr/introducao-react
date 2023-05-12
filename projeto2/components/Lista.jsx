import React from 'react'
import { RemoverBtn } from './RemoverBtn'

export function Lista({ tarefas, remover }) {
  return <ul className="lista">
    {tarefas.map((tarefa, index) => 
    <li key={tarefa} >
      {tarefa} <RemoverBtn index={index} remover={remover} />
    </li>)}
  </ul>
}
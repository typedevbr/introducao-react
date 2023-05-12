import React, { useState } from 'react'
import { Form } from './components/Form'
import { Lista } from './components/Lista'

export function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState(['Comprar leite', 'Comprar ovo'])
  const [inputValue, setInputValue] = useState('')

  function adicionarTarefa() {
    setTarefas([...tarefas, inputValue])
    setInputValue('')
  }

  function remover(indexParaRemover) {
    setTarefas(tarefas.filter((_, indexDaTarefa) => indexDaTarefa !== indexParaRemover))
  }

  return <>
    <h2>Lista de Tarefas</h2>
    <Form inputValue={inputValue} setInputValue={setInputValue} adicionarTarefa={adicionarTarefa} />
    <Lista tarefas={tarefas} remover={remover} />
  </>
}
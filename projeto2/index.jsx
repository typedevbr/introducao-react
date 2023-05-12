import React from 'react'
import { createRoot } from 'react-dom/client'
import { ListaDeTarefas } from './app'

const root = createRoot(document.querySelector('#listaDeTarefas'))

root.render(<ListaDeTarefas />)
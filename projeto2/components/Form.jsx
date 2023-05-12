import React from 'react'

export function Form({ inputValue, setInputValue, adicionarTarefa }) {
  return <div>
    <input type="text" className="itemInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button className="adicionarBtn" onClick={adicionarTarefa}>Adicionar</button>
  </div>
}
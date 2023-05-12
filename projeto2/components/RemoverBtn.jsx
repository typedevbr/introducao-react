import React from 'react'

export function RemoverBtn({ index, remover }) {
  return <span className='remover' onClick={() => remover(index)}>(remover)</span>
}
const listaDOM = document.querySelector('.lista')
const itemInputDOM = document.querySelector('.itemInput')
const adicionarBtnDOM = document.querySelector('.adicionarBtn')

const tarefas = ['Comprar leite']

function listarTarefas() {
  listaDOM.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li')
    const span = document.createElement('span')

    span.innerHTML = "(remover)"
    span.classList.add('remover')
    span.addEventListener('click', () => {
      tarefas.splice(index, 1)
      listarTarefas()
    })

    li.innerHTML = tarefa + ' '
    li.append(span)

    listaDOM.append(li)
  })
}

adicionarBtnDOM.addEventListener('click', () => {
  const tarefa = itemInputDOM.value
  tarefas.push(tarefa)
  listarTarefas()
  itemInputDOM.value = ''
})

listarTarefas()
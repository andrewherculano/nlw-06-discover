import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButton  = document.querySelectorAll('.actions a.delete')

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


const handleClick = (event, check = true) => {
  event.preventDefault()

  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = 
    `${text} esta pergunta`

  modalDescription.innerHTML = 
    `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`

  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}

//Abrir modal: Marcar como lido
checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

//Abrir modal: Excluir
deleteButton.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})





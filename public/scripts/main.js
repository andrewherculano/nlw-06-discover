import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButton  = document.querySelectorAll('.actions a.delete')

checkButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault()

    modal.open()
  })
})

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault()

    modal.open()
  })
})



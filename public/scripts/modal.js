const modalWrapper = document.querySelector('.modal-wrapper')
const cancelButton = document.querySelector('.button.cancel')

export default function Modal() {
  const open = () => {
    modalWrapper.classList.add('active')
  }
  const close = () => {
    modalWrapper.classList.remove('active')
  }

  cancelButton.addEventListener('click', close)

  return {
    open, 
    close
  } 
}


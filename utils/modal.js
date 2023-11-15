

function openModal(event) {
  
  const event_Parent = event.target.parentElement;
  const modal_container = event_Parent.nextElementSibling;
  

  modal_container.classList.add('active')
  modalEventListiner(modal_container)

}

function closeModal(event) {
  const btn_parent = event.target.parentElement;
  const modal = btn_parent.parentElement;
  const modal_parent = modal.parentElement;
  
  modal_parent.classList.remove('active')

}



function modalEventListiner(modal_container){
  modal_container.addEventListener('click', (event) => {
    if (event.target === modal_container){
      modal_container.classList.remove('active')
    }
  })
  

}

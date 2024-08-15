const contactsButtons = document.querySelectorAll('#contacts');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const modalForm = document.getElementById('modal-form');
const mobileMenu = document.getElementById('mob-menu');
const burger = document.getElementById('burger-menu');


function openModal() {
    modal.classList.add('active'); 
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}




    contactsButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });


    closeButton.addEventListener('click', closeModal);

    modalForm.addEventListener('submit', (e) => {
        if (!modalForm.checkValidity()) {
            e.preventDefault();
            return;
        } else {
            e.preventDefault();
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
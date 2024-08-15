const burgerMenu = document.getElementById('burger-menu');
const mobMenu = document.getElementById('mob-menu');
const closeBtn = document.getElementById('mob-close');
const menuLinks = mobMenu.querySelectorAll('a');
const actionBtn = mobMenu.querySelector('.action');

function openMenu() {
    mobMenu.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeMenu() {
    mobMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

burgerMenu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

actionBtn.addEventListener('click', closeMenu);

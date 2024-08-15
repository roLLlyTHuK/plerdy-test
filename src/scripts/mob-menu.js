
    const burgerMenu = document.getElementById('burger-menu');
    const mobMenu = document.getElementById('mob-menu');
    const closeBtn = document.getElementById('mob-close');
    const menuLinks = mobMenu.querySelectorAll('a');

    // Function to open the mobile menu
    function openMenu() {
        mobMenu.classList.add('active'); 
        document.body.classList.add('no-scroll');
    }

    // Function to close the mobile menu
    function closeMenu() {
        mobMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    }

    // Event listeners
    burgerMenu.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

const headerBtn = document.querySelector('.header__boton');
const headerMenu = document.querySelector('.menu');

headerBtn.addEventListener('click', () => {
    console.log(headerMenu.classList)

    if (headerMenu.classList.contains('menu--active')) {
        headerMenu.classList.remove('menu--active')
    }else{
        headerMenu.classList.add('menu--active')
    }
})
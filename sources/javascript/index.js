const close_btn = document.querySelector('.menu__close-btn'),
      open_btn  = document.querySelector('.menu__btn'),
      menu      = document.querySelector('.menu')


open_btn.addEventListener('click', () => {
    menu.classList.add('menu__active')
})

close_btn.addEventListener('click', () => {
    menu.classList.remove('menu__active')
})
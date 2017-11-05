var close_btn = document.querySelector('.menu__close-btn')
var open_btn = document.querySelector('.menu__btn')
var menu     = document.querySelector('.menu')

console.log('yolo')


open_btn.addEventListener('click', () => {
    menu.classList.add('menu__active')
})

close_btn.addEventListener('click', () => {
    menu.classList.remove('menu__active')
})
// menu__btn

// menu
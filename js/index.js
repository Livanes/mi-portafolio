document.body.classList.add('bg-red')
document.body.classList.remove('one')




const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')



btnOpen.onclick = function () {
    navMenu.classList.toggle('show--menu')
}
  
btnClose.onclick = function () {
    navMenu.classList.remove('show--menu')
}
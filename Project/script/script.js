const burgerIcons = document.getElementById('burgerIcons')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const menuList = document.getElementById('menuList')

burgerIcons.addEventListener('click', () => {
  menuList.classList.toggle('show-menu')
  openIcon.classList.toggle('hide')
  closeIcon.classList.toggle('hide')
})

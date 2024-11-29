const popupMenu = document.querySelector('.popup-menu');
const openMenuButton = document.querySelector('.btnMenu__expand'); // предполагаю, что это кнопка для открытия меню
const closeMenuButton = document.querySelector('.menu-close');

openMenuButton.addEventListener('click', () => {
  popupMenu.classList.remove('hiddenPopUp'); // Показать меню
});

closeMenuButton.addEventListener('click', () => {
  popupMenu.classList.add('hiddenPopUp'); // Скрыть меню
});

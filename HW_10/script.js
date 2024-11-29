const popupMenu = document.querySelector('.popup-menu__content');
const expandButton = document.querySelector('.btnMenu__expand');
const closeButton = document.querySelector('.menu-close');

function toggleMenu() {
  popupMenu.classList.toggle('hiddenPopUP');
}

// Навешиваем обработчики событий
expand.addEventListener('click', toggleMenu); // Открыть/закрыть меню
closeButton.addEventListener('click', toggleMenu); // Закрыть меню

const menu = document.querySelector('.menu');
const popupCallMe = document.querySelector('.popup_type_normal');


const buttonNavMenu = document.querySelector('.nav__button');
const buttonCloseMenu = document.querySelector('.menu__icon-close');
const buttonBaner = document.querySelector('.banner__button');
const buttonIconClosePopup = document.querySelector('.popup__icon-close_type_normal');
const buttonContacts = document.querySelector('.contacts__button')

//-----------------------------------------Навигационное меню для экрана мобильных устройств
//------функция открытия меню
function openMenu(element) {
    element.classList.add('menu_opened');
    // вешаем слушатель на закрытия меню кликом по оверлей
    element.addEventListener('mousedown', toCloseMenuByClickOverlay);
    // вешаем слушатель на закрытие меня по клику esc
    document.addEventListener('keydown', toCloseMenuByClickEsc);
}

//------функция закрытия меню
function closeMenu(element) {
    element.classList.remove('menu_opened');
    // снимаем слушатели с оверлей и  esc
    element.removeEventListener('mousedown', toCloseMenuByClickOverlay);
    document.removeEventListener('keydown', toCloseMenuByClickEsc);
}

function toCloseMenuByClickOverlay(evt) {
    console.log(evt.target.className)
    if (evt.target.className === 'menu menu_opened') {
        closeMenu(menu);
    }
}

function toCloseMenuByClickEsc(evt) {
    if (evt.key === 'Escape') {
        closeMenu(menu);
    }
}

buttonNavMenu.addEventListener('click', () => {
    openMenu(menu)
})

buttonCloseMenu.addEventListener('click', () => {
    closeMenu(menu)
})

//------------------------------------------Popup-------------------------------

function openPopup(element) {
    element.classList.add('popup_opened');
    element.addEventListener('mousedown', toClosePopupByClickOverlay);
    document.addEventListener('keydown', toClosePopupByClickEsc);
}

function closePopup(element) {
    element.classList.remove('popup_opened');
    element.removeEventListener('mousedown', toClosePopupByClickOverlay);
    document.removeEventListener('keydown', toClosePopupByClickEsc);
}

function toClosePopupByClickOverlay(evt) {
    if(evt.target.classList.contains('popup')) {
        closePopup(popupCallMe);
    }
}

function toClosePopupByClickEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(popupCallMe); 
    }
}

buttonBaner.addEventListener('click', () => {
    openPopup(popupCallMe)
})

buttonContacts.addEventListener('click', () => {
    openPopup(popupCallMe)
})

buttonIconClosePopup.addEventListener('click', () => {
    closePopup(popupCallMe);
})



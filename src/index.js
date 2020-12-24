import './styles.css';

// -----создание шаблона и разметки-----

import menuTemplate from './templates/menu-items.hbs';

import menuList from './menu.json';
console.log(menuList);

const markup = menuTemplate(menuList);
console.log(markup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

// ------переключение темы------------

const bodyRef = document.querySelector('body');
const themeRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// восстановление при  перезагрузке
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  bodyRef.classList.add(savedTheme);
}

if (savedTheme === Theme.DARK) {
  themeRef.setAttribute('checked', true);
}

const themeRefHandler = () => {
  if (themeRef.checked === true) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else if (themeRef.checked === false) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  const currentTheme = bodyRef.getAttribute('class');
  localStorage.setItem('theme', currentTheme);
};

themeRef.addEventListener('change', themeRefHandler);
console.log(themeRefHandler);

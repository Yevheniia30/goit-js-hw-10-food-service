import './styles.css';

// -----создание шаблона и разметки-----
import menuTemplate from './templates/menu-items.hbs';

import menuList from './menu.json';
console.log(menuList);

const markup = menuTemplate(menuList);
console.log(markup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

// переключение темы

const bodyRef = document.querySelector('body');
const themeRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// themeRef.addEventListener('change', themeRefHandler);
// console.log(themeRefHandler);

const themeRefHandler = event => {
  if (themeRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);

    localStorage.setItem('index', JSON.stringify(Theme.DARK));
    localStorage.removeItem('index', JSON.stringify(Theme.LIGHT));
  } else if (!themeRef.checked) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

    localStorage.removeItem('index', JSON.stringify(Theme.DARK));
    localStorage.setItem('index', JSON.stringify(Theme.LIGHT));
  }
};

themeRef.addEventListener('change', themeRefHandler);
console.log(themeRefHandler);

const loadTheme = () => {};

const saveTheme = () => {
  // if (bodyRef.classList) {
};

// themeRef.addEventListener('change', themeRefHandler);
// console.log(themeRefHandler);

// localStorage.setItem('Theme', JSON.stringify(Theme));
// localStorage.removeItem('Theme');

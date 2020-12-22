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

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', JSON.stringify(Theme));
localStorage.removeItem('Theme');

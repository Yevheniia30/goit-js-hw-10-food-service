import './styles.css';

import menuTemplate from './templates/menu-items.hbs';

import menuList from './menu.json';
console.log(menuList);

const markup = menuTemplate(menuList);
console.log(markup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

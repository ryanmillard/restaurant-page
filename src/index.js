import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createAbout from './about.js';

let homeBtn = document.getElementById('home-btn');
let menuBtn = document.getElementById('menu-btn');
let aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', () => {
    createHome();
});

menuBtn.addEventListener('click', () => {
    createMenu();
});

aboutBtn.addEventListener('click', () => {
    createAbout();
});

createAbout();
import './cards.pug';
import './cards.scss';
import room1 from './login/login.js';
import room2 from './login/login.js';

document.getElementsByClassName('radmenu')[0].children[0].children[0].checked = true;
let star = document.getElementsByClassName('starbox')[1].children[4];
star.innerHTML = 'star_border';



import './form.pug';
import './form.scss';
import dinamicDrop from './elements/input/input.js';


let dropexp = document.getElementsByClassName('dropexp')[0];
let dropOne = dropexp.children[1].children[0].children[1].children[1];
let dropTwo = dropexp.children[1].children[1].children[1].children[1];
dropOne.innerHTML = 2;
dropTwo.innerHTML = 2;

let dropimp2 = document.getElementsByClassName('dropimp2')[0];
let dripOne = dropimp2.children[1].children[0].children[1].children[1];
let dripTwo = dropimp2.children[1].children[1].children[1].children[1];
dripOne.innerHTML = 2;
dripTwo.innerHTML = 2;

dinamicDrop('elements__numbers__circle1', 'elements__numbers__circle2', 'elements__numbers__num');


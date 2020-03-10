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


let checkbox1 = document.getElementsByClassName('checkboxopen')[0].lastElementChild.children;
let double1 = document.getElementsByClassName('doublecheck1')[0].lastElementChild.children;
let radbut = document.getElementsByClassName('radbut')[0].children[1].children[0].children[0];
let togbut = document.getElementsByClassName('togbut')[0].children[1].children[0].children[0];

radbut.checked = true;
togbut.checked = true;

for (let i = 0; i < checkbox1.length; i++) {
    if (i == 1 || i == 2 || i == 3) {
        checkbox1[i].children[0].children[0].checked = true;
    }

}

for (let i = 0; i < double1.length; i++) {
    if (i == 1 || i == 2) {
        double1[i].children[0].children[0].checked = true;
    }

}


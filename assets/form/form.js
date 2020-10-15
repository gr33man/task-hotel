import './form.pug';
import './form.scss';
import img from '../img/image.svg';



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


let checkbox1 = document.getElementsByClassName('checkboxopen')[0].lastElementChild.children;
let double1 = document.getElementsByClassName('doublecheck1')[0].lastElementChild.children;
let radbut = document.getElementsByClassName('radbut')[0].children[1].children[0].children[0];
let togbut = document.getElementsByClassName('togbut')[0].children[1].children[0].children[0];


let star1 = document.getElementsByClassName('starbox')[0].children;
let star2 = document.getElementsByClassName('starbox')[1].children;



for (let i = 0; i < star1.length - 1; i++) {
    star1[i].innerHTML = 'star';
}

for (let j = 0; j < star2.length; j++) {
    star2[j].innerHTML = 'star';
}


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




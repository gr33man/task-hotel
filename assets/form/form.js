import './form.pug';
import './form.scss';

let dropexp = document.getElementsByClassName('dropexp')[0];
let dropOne = dropexp.children[1].children[0].children[1].children[1];
let dropTwo = dropexp.children[1].children[1].children[1].children[1];
dropOne.innerHTML = 2;
dropTwo.innerHTML = 2;

let dropimp2 = document.getElementsByClassName('dropimp2')[0];
let dropimp2One = dropimp2.children[1].children[0].children[1].children[1];
let dropimp2Two = dropimp2.children[1].children[1].children[1].children[1];
dropimp2One.innerHTML = 2;
dropimp2Two.innerHTML = 1;


let minbuts = document.getElementsByClassName('elements__numbers__circle1');
let plusbuts = document.getElementsByClassName('elements__numbers__circle2');
let nums = document.getElementsByClassName('elements__numbers__num');


for (let i = 0; i < minbuts.length; i++) {

    for (let j = 0; j < nums.length; j++) {

        if (i == j) {

            if (nums[j].innerHTML == 0) {
                minbuts[i].classList.add('disable_border');
                minbuts[i].firstChild.classList.add('disable_color');
            }

        }

        if (i == j) {
            minbuts[i].addEventListener('click', () => {
                if (nums[j].innerHTML > 0) {
                    nums[j].innerHTML--;
                }

                if (nums[j].innerHTML > 0) {
                    minbuts[i].classList.remove('disable_border');
                    minbuts[i].firstChild.classList.remove('disable_color');

                } else if (nums[j].innerHTML == 0) {
                    minbuts[i].classList.add('disable_border');
                    minbuts[i].firstChild.classList.add('disable_color');
                }
            });
        }

    }

}

for (let i = 0; i < plusbuts.length; i++) {

    for (let j = 0; j < nums.length; j++) {
        if (i == j) {
            plusbuts[i].addEventListener('click', () => {
                if (nums[i].innerHTML >= 0) {
                    nums[i].innerHTML++;
                }


                if (nums[j].innerHTML > 0) {
                    minbuts[i].classList.remove('disable_border');
                    minbuts[i].firstChild.classList.remove('disable_color');

                }
            });
        }

    }

}



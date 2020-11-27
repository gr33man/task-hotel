import './roomquest.scss';
import room1 from '../../img/room1.svg';
import room2 from '../../img/room2.svg';
import room3 from '../../img/room3.svg';
import room4 from '../../img/room4.svg';
import room5 from '../../img/room5.svg';
import room6 from '../../img/room6.svg';
import room7 from '../../img/room7.svg';
import room8 from '../../img/room8.svg';
import room9 from '../../img/room9.svg';
import room10 from '../../img/room10.svg';
import room11 from '../../img/room11.svg';
import room12 from '../../img/room12.svg';
import 'air-datepicker/dist/js/datepicker.min.js';
import 'air-datepicker/dist/css/datepicker.min.css';
import closeDrop from '../landing/landing.js';



let clack = 0;
let coreblock = document.getElementsByClassName('coreblock')[0];
let filter = document.getElementsByClassName('adapbut')[0];
let checkclose = document.getElementsByClassName('checkclose')[0];
let roomquest = document.getElementsByClassName('box_roomquest')[0];


if (filter) {
    let dropblock = document.getElementsByClassName('envir_room')[0].getElementsByClassName('dropblock')[0];
    filter.addEventListener('click', function () {

        coreblock.children[1].classList.toggle('vision');
    });

    if (checkclose) {
        checkclose.addEventListener('click', function () {

            coreblock.children[0].classList.toggle('gap2');

        });
    }

    if (dropblock) {
        dropblock.addEventListener('click', function () {
            this.closest('.coreblock').children[0].classList.toggle('gap3');
        });
    }

}

window.addEventListener('click', function (e) {
    if (!e.target.closest('.envir_room') && document.querySelector('.envir_room .droppyex').style.display == 'flex') {
        document.querySelector('.coreblock').children[0].classList.remove('gap3');
    }
});

if (coreblock) {
    document.getElementsByClassName('burger')[0].addEventListener('click', function () {
        coreblock.classList.toggle('gap');

    });
}


if (roomquest) {
    roomquest.children[0].addEventListener('click', function () {
        if (roomquest.children[1].style.display == 'block') {
            roomquest.children[1].style.display = 'none';
        } else {
            roomquest.children[1].style.display = 'block';
        }
    });

    let datepicker = roomquest.children[1];
    let display = roomquest.children[0].getElementsByClassName('dropblockmiddle__words')[0];
    let arr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    datepicker.addEventListener('click', function dateFunc() {
        clack++;

        if (!this.querySelectorAll('.-range-to-')[0]) {
            let before = this.querySelectorAll('.-range-from-')[0].dataset.date + ' ' + arr[parseInt(this.querySelectorAll('.-range-from-')[0].dataset.month)];
            display.innerHTML = before;
        } else {
            if (clack < 3) {
                let after = this.querySelectorAll('.-range-to-')[0].dataset.date + ' ' + arr[parseInt(this.querySelectorAll('.-range-to-')[0].dataset.month)];
                if (display.innerHTML !== after)
                    display.innerHTML += ' - ' + after;

            }
        }
        if (display.innerHTML.length < 12) {
            clack = 1;
        }
    });

    datepicker.querySelector('.clear').addEventListener('click', function () {
        display.innerHTML = 'выберите дату';
    })

}

if (checkclose) {
    toggleFunc(checkclose);
    closeDrop('.box_dropdown', '.checkmain.vision', 'vision')
}

function toggleFunc(elem) {
    elem.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('vision');
    });
}



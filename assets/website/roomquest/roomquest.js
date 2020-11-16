import './roomquest.scss';
let clack = 0;



let checkclose = document.getElementsByClassName('checkclose')[0];
let roomquest = document.getElementsByClassName('box_roomquest')[0];



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




if (checkclose) toggleFunc(checkclose);





function toggleFunc(elem) {
    elem.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('vision');
    });
}


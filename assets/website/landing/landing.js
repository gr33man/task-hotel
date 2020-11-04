import './landing.scss';
import dinamicDrop from '../../form/elements/input/input.js';

// данные

let bars = document.getElementsByClassName('bar1__el1');
let menuBars = ['О нас', 'Услуги', 'Вакансии', 'Новости', 'Соглашения'];
let arrForMenu = ['НАВИГАЦИЯ', 'О нас', ' Новости', 'Служба поддержки', 'Услуги', 'О НАС', 'О сервисе', 'Наша команда', 'Вакансии', 'Инвесторы', 'СЛУЖБА ПОДДЕРЖКИ', 'Соглашения', 'Сообщества', 'Связь с нами'];
let btn_log = document.getElementsByClassName('btn1__log1')[0];
let btn_reg = document.getElementsByClassName('btn1__reg1')[0];
let emblem_tox = document.getElementsByClassName('emblem__tox')[0];
let menues = document.getElementsByClassName('menu');
let blocktext = document.getElementsByClassName('blocktext')[0];
let links = document.getElementsByClassName('links')[0];
let arrive = document.getElementsByClassName('dropblockshort')[0];
let embred = document.getElementsByClassName('dropblockshort')[1];
let calendar = document.getElementsByClassName('datepicker-here')[0];
let click = 1;
let clear = document.getElementsByClassName('clear')[0];
let confirm = document.getElementsByClassName('confirm')[0];

let burger = document.getElementsByClassName('burger')[0];
let bar1 = document.getElementsByClassName('bar1')[0];
let searcher = document.getElementsByClassName('searcher')[0];
let btn1 = document.getElementsByClassName('btn1')[0];
let regisacc = document.getElementsByClassName('regisacc')[0];
let logged = document.getElementsByClassName('logged')[0];


let dropblocks = document.getElementsByClassName('dropblock');
let pluses = document.getElementsByClassName('elements__numbers__circle2');
let mines = document.getElementsByClassName('elements__numbers__circle1');
let nums = document.getElementsByClassName('elements__numbers__num');
let sum = 0;
let cancel = document.getElementsByClassName('cancel')[0];
let ok = document.getElementsByClassName('ok')[0];
let droppyex = document.getElementsByClassName('droppyex')[0];

// код

emblem_tox.children[1].innerHTML = 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отдельные взгляды"';
blocktext.children[0].innerHTML = 'Подписка';
blocktext.children[1].children[0].innerHTML = 'Получайте специальные предложения и новости сервиса';
blocktext.nextElementSibling.placeholder = 'Email';
links.children[0].innerHTML = 'Copyright © 2018 Toxin отель. Все права зачищены';

burger.onclick = function () {
    this.classList.toggle('chrest');
    bar1.classList.toggle('chrest');
    if (searcher) searcher.classList.toggle('chrest');
    if (regisacc) regisacc.classList.toggle('chrest');
    if (logged) logged.classList.toggle('chrest');
    btn1.classList.toggle('chrest');
}




btn_log.innerHTML = 'ВОЙТИ';
btn_reg.innerHTML = 'ЗАРЕГИСТРИРОВАТЬСЯ';
bars[bars.length - 1].parentElement.removeChild(bars[bars.length - 1]);

changeName(bars, menuBars);
changeName(menues, arrForMenu);

if (arrive) calUp(arrive);

if (embred) calUp(embred);


$('.datepicker-here').datepicker({
    navTitles: {
        days: 'MM yyyy'
    },
    range: true,
    minDate: new Date()
});

dinamicDrop('elements__numbers__circle1', 'elements__numbers__circle2', 'elements__numbers__num');

if (calendar) calendar.addEventListener('click', changeFirstData);

if (confirm) {
    confirm.addEventListener('click', function () {
        calendar.style.display = 'none';
    });
}

if (clear) {
    clear.addEventListener('click', function () {
        let origin = 'ДД.ММ.ГГГГ';
        arrive.children[0].innerHTML = origin;
        embred.children[0].innerHTML = origin;
    });
}



dropChange(pluses);
dropChange(mines);

if (cancel) {
    cancel.addEventListener('click', function () {
        for (let num of nums) {
            num.innerHTML = 0;
            num.previousElementSibling.classList.add('disable_border');
            num.previousElementSibling.children[0].classList.add('disable_color');
            dropblock.children[0].innerHTML = 'Сколько гостей';
        }
    });
}

for (let dropblock of dropblocks) {

    dropblock.addEventListener('click', function () {
        let elem = this.parentElement.parentElement.nextElementSibling;
        if (elem.className = "droppyex") {
            if (elem.style.display == 'flex') {
                elem.style.display = 'none';
            } else {
                elem.style.display = 'flex';
            }
        }
    });
}





if (ok) {
    ok.addEventListener('click', function () {
        droppyex.style.display = 'none';
    });
}

// функции 

function changeFirstData(e) {
    let t = e.target;
    if (t.dataset.date && !t.classList.contains('-disabled-')) {
        arrive.children[0].innerHTML = zero(t.dataset.date + '.' + t.dataset.month + '.' + t.dataset.year);
        calendar.removeEventListener('click', changeFirstData);
        click = 2;
        calendar.addEventListener('click', changeLastData);
    }
}

function changeLastData(e) {
    let t = e.target;
    if (t.dataset.date && !t.classList.contains('-disabled-')) {
        if (t.classList.contains('-range-from-')) {
            embred.children[0].innerHTML = arrive.children[0].innerHTML;
            arrive.children[0].innerHTML = zero(t.dataset.date + '.' + t.dataset.month + '.' + t.dataset.year);
        } else {
            embred.children[0].innerHTML = zero(t.dataset.date + '.' + t.dataset.month + '.' + t.dataset.year);
        }

        click = 1;
        calendar.removeEventListener('click', changeLastData);
        calendar.addEventListener('click', changeFirstData);
    }
}

function changeName(names, arr) {

    let i = 0;
    for (let name of names) {
        if (name.children[0]) {
            name.children[0].innerHTML = arr[i];
        } else {
            name.innerHTML = arr[i];
        }
        i++;
    }

}

function calUp(elem) {
    elem.addEventListener('click', function () {

        if (calendar.style.display == 'block') {
            calendar.style.display = 'none';

        } else {
            calendar.style.display = 'block';
            droppyex.style.display = 'none';
        }



    });

}

function zero(str) {

    let arr = str.split('.');

    arr = arr.map(function (el) {
        if (el < 10 && el !== '0') {
            return '0' + el;
        } else if (el === '0') {
            return 12;
        } else {
            return el;
        }
    });
    return arr.join('.');
}


function dropChange(pars) {
    for (let par of pars) {

        par.addEventListener('click', function () {
            let dropblock = this.closest('.droppyex').previousElementSibling.children[1].children[0];

            for (let num of nums) {

                sum += parseInt(num.innerHTML);
            }

            if (nums[2].innerHTML == 0) {
                if (sum == 1) {
                    dropblock.children[0].innerHTML = sum + ' гость';
                } else if (sum == 2 || sum == 3 || sum == 4) {
                    dropblock.children[0].innerHTML = sum + ' гостя';
                } else {
                    dropblock.children[0].innerHTML = sum + ' гостей';
                }
            } else {
                if (sum == 1) {
                    dropblock.children[0].innerHTML = sum + ' гость' + ' ' + nums[2].innerHTML + ' ' + 'младенец';
                } else if (sum == 2 || sum == 3 || sum == 4) {
                    dropblock.children[0].innerHTML = sum + ' гостя' + ' ' + nums[2].innerHTML + ' ' + 'младенца';
                } else {
                    dropblock.children[0].innerHTML = sum + ' гостей' + ' ' + nums[2].innerHTML + ' ' + 'младенцев';
                }
            }
            sum = 0;

        });

    }
}

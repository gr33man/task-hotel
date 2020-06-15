import './landing.scss';

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

// код

emblem_tox.children[1].innerHTML = 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отдельные взгляды"';
blocktext.children[0].innerHTML = 'Подписка';
blocktext.children[1].children[0].innerHTML = 'Получайте специальные предложения и новости сервиса';
blocktext.nextElementSibling.placeholder = 'Email';
links.children[0].innerHTML = 'Copyright © 2018 Toxin отель. Все права зачищены';


btn_log.innerHTML = 'ВОЙТИ';
btn_reg.innerHTML = 'ЗАРЕГИСТРИРОВАТЬСЯ';
bars[bars.length - 1].parentElement.removeChild(bars[bars.length - 1]);

changeName(bars, menuBars);
changeName(menues, arrForMenu);




// функции 

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







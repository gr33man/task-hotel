import './landing.scss';


let bars = document.getElementsByClassName('bar1__el1');
let menuBars = ['О нас', 'Услуги', 'Вакансии', 'Новости', 'Соглашения'];


bars[bars.length - 1].parentElement.removeChild(bars[bars.length - 1]);


let i = 0;
for (let bar of bars) {
    bar.children[0].innerHTML = menuBars[i];
    i++;
}


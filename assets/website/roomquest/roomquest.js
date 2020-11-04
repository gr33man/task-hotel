import './roomquest.scss';


let checkclose = document.getElementsByClassName('checkclose')[0];
let dropblock = document.getElementsByClassName('envir_room')[0].children[0];

toggleFunc(checkclose);
//toggleFunc(dropblock);



function toggleFunc(elem) {
    elem.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('vision');
    });
}
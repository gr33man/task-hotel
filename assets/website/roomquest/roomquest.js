import './roomquest.scss';


let checkclose = document.getElementsByClassName('checkclose')[0];
let roomquest = document.getElementsByClassName('box_roomquest')[0];

roomquest.children[0].addEventListener('click', function () {
    if (roomquest.children[1].style.display == 'block') {
        roomquest.children[1].style.display = 'none';
    } else {
        roomquest.children[1].style.display = 'block';
    }
});


toggleFunc(checkclose);

function toggleFunc(elem) {
    elem.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('vision');
    });
} 
let starbox = document.querySelectorAll('.starbox');



for (let i = 0; i < starbox.length; i++) {
    let stars = starbox[i].children;

    for (let j = 0; j < stars.length; j++) {

        stars[j].addEventListener('click', function () {
            let index = j;
            console.log(this)

            if (stars[j].innerHTML === 'star_border') {

                for (let j = 0; j <= index; j++) {
                    stars[j].innerHTML = 'star';
                }
            } else {
                for (let j = index; j <= 4; j++) {
                    stars[j].innerHTML = 'star_border';
                }
            }
        })

    }
}


export function like() {
    let likepluses = document.getElementsByClassName('likes');
    console.log('hel')
    for (const like of likepluses) {
        like.addEventListener('click', function () {
            if (like.children[0].innerHTML == 'favorite') {
                this.children[1].innerHTML = parseInt(this.children[1].innerHTML) + 1;
            } else if (like.children[0].innerHTML == 'favorite_border') {
                this.children[1].innerHTML = parseInt(this.children[1].innerHTML) + 1;
                like.children[0].innerHTML = 'favorite';
            }
        });
    }
}

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 15000,
        values: [5000, 10000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + "P - " + ui.values[1] + "P");
        }
    });

    $("#amount").val($("#slider-range").slider("values", 0) + "P - " +
        $("#slider-range").slider("values", 1) + "P");
});



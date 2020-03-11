let likepluses = document.getElementsByClassName('likes');

for (const like of likepluses) {
    like.addEventListener('click', function () {
        if (like.children[0].innerHTML == 'favorite')
            this.children[1].innerHTML = parseInt(this.children[1].innerHTML) + 1;
    });
}


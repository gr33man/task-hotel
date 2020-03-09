
export default function dinamicDrop(min, plus, num) {

    let minbuts = document.getElementsByClassName(min);
    let plusbuts = document.getElementsByClassName(plus);
    let nums = document.getElementsByClassName(num);

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
}


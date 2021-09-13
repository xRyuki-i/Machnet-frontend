// Buttons
const next = document.querySelector('.btn--next');
const prev = document.querySelector('.btn--prev');

// Bottom navigation button
const nav = document.querySelectorAll('.nav__btn')

//Slide component
const slide = document.querySelector('.slide--first');

//Function to fill navigation buttons
const fillDot = (index) => {
    for (let i=0; i<nav.length; i++){
            if (i == index) {
                nav[i].style.backgroundColor = "white";
            } else {
                nav[i].style.backgroundColor = "transparent";
            }
        }
};


let counter = 1;

// Event Listeners
next.addEventListener('click', () => {
if (counter === 1) {
        slide.style.marginLeft = "-20%";
        fillDot(1);
        counter += 1;
    } else if (counter == 2) {
        slide.style.marginLeft = "-40%";
        fillDot(2);
        counter += 1;
    } else if (counter == 3) {
        slide.style.marginLeft = "-60%";
        fillDot(3);
        counter += 1;
    } else {
        slide.style.marginLeft = "0";
        fillDot(0);
        counter = 1;
    }
})

prev.addEventListener('click', () => {

    if (counter === 2) {
        slide.style.marginLeft = "0";
        fillDot(0);
        counter -= 1;
    } else if (counter == 3) {
        slide.style.marginLeft = "-20%";
        fillDot(1);
        counter -= 1;
    } else if (counter == 4) {
        slide.style.marginLeft = "-40%";
        fillDot(2);
        counter -= 1;
    } else {
        slide.style.marginLeft = "-60%";
        fillDot(3);
        counter = 4;
    }
})

nav[0].addEventListener('click', ()=> {
    slide.style.marginLeft = "0";
        fillDot(0);
        counter = 1;
})

nav[1].addEventListener('click', ()=> {
    slide.style.marginLeft = "-20%";
        fillDot(1);
        counter = 2;
})

nav[2].addEventListener('click', ()=> {
    slide.style.marginLeft = "-40%";
        fillDot(2);
        counter = 3;
})

nav[3].addEventListener('click', ()=> {
    slide.style.marginLeft = "-60%";
        fillDot(3);
        counter = 0;
})
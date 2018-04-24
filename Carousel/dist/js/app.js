let slideList = document.querySelector('#sliderWrap');
let slides = slideList.querySelectorAll('li');
let items = slides.length;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let count = 0;



function clickPrev() {
  slides[0].style.opacity = '1';
  prev.addEventListener('click', (event) => {
    if (count < items && count > 0) {
      count--;
      slides[count + 1].style.opacity = '0';
      slides[count].style.opacity = '1';
    } else if (count === 0) {
      slides[count].style.opacity = '0';
      slides[items - 1].style.opacity = '1';
      count = items;
      count--;
    }
  })
}


function clickNext() {
  slides[0].style.opacity = '1';
  next.addEventListener('click', (event) => {
    if (count < items - 1) {
      count++;
      slides[count - 1].style.opacity = '0';
      slides[count].style.opacity = '1';
    } else if (count >= items - 1) {
      count = 0;
      slides[items - 1].style.opacity = '0';
      slides[count].style.opacity = '1';
    }
  })
}


clickPrev();
clickNext();
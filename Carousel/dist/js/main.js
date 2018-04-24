// class Renders {
//   constructor() {
//     this.container = document.querySelector('#carousel__container');
//   }

//   init() {
//     let sliderOutput = '';
//     sliderOutput += `
//     <div id="slider">
//       <ul id="sliderWrap">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <a id="prev" href="#">&#8810;</a>
//       <a id="next" href="#">&#8811;</a>
//     </div>
//     `
//     return this.container.innerHTML += sliderOutput;
//   }
// }


class SliderViewer {
  constructor() {
    this.slider = document.querySelector('#slider');
    this.slideList = document.querySelector('#sliderWrap');
    this.count = 1;
    console.log(this);
  }

  prevSlide() {
    let items = this.slideList.querySelectorAll('li').length;
    let sliderWidth = this.slider.clientWidth;
    if (this.count > 1) {
      this.count = this.count - 2;
      this.slideList.style.left = "-" + this.count * sliderWidth + "px";
      this.count++;
    } else if (this.count = 1) {
      this.count = items - 1;
      this.slideList.style.left = "-" + this.count * sliderWidth + "px";
      this.count++;
    }
  }


  nextSlide() {
    let items = this.slideList.querySelectorAll('li').length;
    let sliderWidth = this.slider.clientWidth;

    if (this.count < items) {
      this.slideList.style.left = "-" + this.count * sliderWidth + "px";
      this.count++;
    } else if (this.count = items) {
      this.slideList.style.list = "0px";
      this.count = 1;
    }
  }
}


class CarouselController {
  constructor(viewer) {
    this.viewer = viewer;
    this.prev = document.getElementById('prev');
    this.next = document.getElementById('next');
  }

  arrowExec() {
    next.addEventListener("click", () => viewer.nextSlide());
    prev.addEventListener("click", () => viewer.prevSlide());
  }
}

const viewer = new SliderViewer();
const controls = new CarouselController(viewer);

controls.arrowExec();
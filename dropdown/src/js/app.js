var dropBtn = document.querySelector('.header__drop-button');
var menuList = document.querySelectorAll('.header__items');


dropBtn.addEventListener('mouseover', event => {
  menuList.forEach(el => {
    el.classList.remove('hide');
    el.classList.add('show');
  });
})


dropBtn.addEventListener('mouseleave', event => {
  menuList.forEach(el => {
    el.classList.remove('show');
    el.classList.add('hide');
  });
})
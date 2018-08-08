var dropBtn = document.querySelector('.header__drop-button');
var menuList = document.querySelectorAll('.header__items');


dropBtn.addEventListener('click', event => {
  menuList.forEach(el => {
    if (el.classList.contains('hide')) {
      el.classList.remove('hide');
      el.classList.add('show');
    } else {
      el.classList.remove('show');
      el.classList.add('hide');
    }
  });
})
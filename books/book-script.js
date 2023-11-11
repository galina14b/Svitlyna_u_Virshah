// Menu ==========================================

const hamburger = document.getElementById('checkbox');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open');
})

nav.addEventListener('click', function () {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.checked = false;
  }
})



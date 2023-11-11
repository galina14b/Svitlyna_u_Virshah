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

// Arrow Up =========================================

const arrowUp = document.querySelector('.arrowUp');

window.addEventListener('scroll', function () {
  const height = document.documentElement.scrollTop
  if (height > 900) {
    arrowUp.classList.add('showArrow')
  } else {
    arrowUp.classList.remove('showArrow')
  }
});

arrowUp.addEventListener('click', function () {
  const headerElement = document.querySelector('.header');
  headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
})

// OrderForm ==================================

// const orderFormElement = document.querySelector('.orderForm');
// const openingFormBtn = document.querySelectorAll('.formOpeningBtn');
// const crossForm = document.querySelector('.orderForm__cross');
// const darkBackground = document.querySelector('.dark-background');
// const openingBackground = document.querySelector('.showDarkBackground');

// openingFormBtn.forEach(btn => {
//   btn.addEventListener('click', function () {
//     orderFormElement.classList.add('showForm');
//     darkBackground.classList.add('showDarkBackground');
//   })
// })

// crossForm.addEventListener('click', function () {
//   orderFormElement.classList.remove('showForm');
//   darkBackground.classList.remove('showDarkBackground');
// })



// Form sending to Google Table ===================

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbx27tPAH44LOQn-6SrKTjhvGR_tcobRRaT7LroPN3cPP9JU7FSs9nRWysTZQ_xPQ5eE/exec';

let background = document.querySelector('.dark-background');
let alert = document.querySelector('.alert');
let alertSpinner = document.querySelector('.alert__spinner');
let alertTitle = document.querySelector('.alert__title');

let errorTitle = document.querySelector('.error__title ');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitButton.disabled = true;
  background.classList.add('showDarkBackground');
  alert.classList.add('showAlert');
  alertSpinner.classList.remove('spinner__hide');


  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {

      if (response.ok) {
        alertSpinner.classList.add('spinner__hide');
      alertTitle.classList.remove('alert__title_hide');
      submitButton.disabled = false;
      form.reset();

      setTimeout(() => {
        alertTitle.classList.add('alert__title_hide');
        alert.classList.remove('showAlert');
        background.classList.remove('showDarkBackground');
      }, 5000)
      } 

      })
    .catch(error => {
      alertSpinner.classList.add('spinner__hide');
      errorTitle.classList.remove('error__title_hide');
      
      setTimeout(() => {
        errorTitle.classList.add('error__title_hide');
        alert.classList.remove('showAlert');
        background.classList.remove('showDarkBackground');
        submitButton.disabled = false;
      }, 7000)
    }
  )

})


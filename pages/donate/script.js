const INPUT_NUMBER = document.querySelector('.input_number')
const BURGER = document.querySelector(".burger_button")
const NAVBURGER = document.querySelector(".nav__burger")
const SPAN = document.querySelector(".span")
const OPACITY = document.querySelector(".opacity")
const RADIO = document.querySelectorAll('.radio')
const INPUT_MONEY = document.querySelector(".input_money")
const INPUT_NUMBER_SYMBOL = document.querySelector(".input_number-symbol")


INPUT_NUMBER.addEventListener('input', (event) => {
  if (INPUT_NUMBER.value.length > 4) {
    INPUT_NUMBER.value = INPUT_NUMBER.value.slice(0, 4);
  }
  if(INPUT_NUMBER.value === '') {
    INPUT_NUMBER.value = INPUT_NUMBER.value.slice(1, INPUT_NUMBER.value.length - 1)
  }

  if(INPUT_NUMBER.value === '') {
    INPUT_NUMBER.classList.remove('active')
    INPUT_MONEY.classList.remove('active')
    INPUT_NUMBER_SYMBOL.classList.remove('active')
  } else {
    INPUT_NUMBER.classList.add('active')
    INPUT_MONEY.classList.add('active')
    INPUT_NUMBER_SYMBOL.classList.add('active')
  }

  checkedInput()

})

const checkedInput = () => {
  const arrNumber = ['5000', '2000', '1000', '500', '250', '100', '50', '25']

  for(let i = 0; i < arrNumber.length; i++) {
    if(INPUT_NUMBER.value === arrNumber[i]) {
      inputCheckedFalse()
      RADIO[i].checked = true
      break
    } else {
      inputCheckedFalse()
    }
  }
  
  
}

const inputCheckedFalse = () => {
  for(let i = 0; i < RADIO.length; i++) {
    RADIO[i].checked = false
  }
}


BURGER.addEventListener("click", () => {
  BURGER.classList.toggle('active')
  NAVBURGER.classList.toggle('active')
  SPAN.classList.toggle('active')
  OPACITY.classList.toggle('active')
})

document.addEventListener('click', event => {
  if(event.target.className !== 'burger_button active' && 
  event.target.className !== 'span active' && 
  event.target.className !== 'nav__burger active') {
    BURGER.classList.remove('active')
    NAVBURGER.classList.remove('active')
    SPAN.classList.remove('active')
    OPACITY.classList.remove('active')
    if(window.innerWidth > 995) {
      NAVBURGER.classList.add('inactive')
    } else {
      NAVBURGER.classList.remove('inactive')
    }
  }
})

for(let i = 0; i < RADIO.length; i++) {
  INPUT_NUMBER.value = 100
  RADIO[i].addEventListener('click', (event) => {
    INPUT_NUMBER.value = event.target.id;
    INPUT_NUMBER.classList.add('active')
    INPUT_MONEY.classList.add('active')
    INPUT_NUMBER_SYMBOL.classList.add('active')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  if(window.innerWidth > 995) {
    NAVBURGER.classList.add('inactive')
  } else {
    NAVBURGER.classList.remove('inactive')
  }
})


window.addEventListener('resize', () => {
  checkedInput()
  if(window.innerWidth > 995) {
    NAVBURGER.classList.add('inactive')
  } else {
    NAVBURGER.classList.remove('inactive')
  }

})
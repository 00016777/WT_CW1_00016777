const BURGER = document.querySelector(".burger_button")
const NAVBURGER = document.querySelector(".nav__burger")
const SPAN = document.querySelector(".span")
const OPACITY = document.querySelector(".opacity")

BURGER.addEventListener("click", () => {
  if(!BURGER.classList.contains('active')){
    BURGER.classList.remove('inactive')
    NAVBURGER.classList.remove('inactive')
    SPAN.classList.remove('inactive')
    OPACITY.classList.remove('inactive')
    BURGER.classList.add('active')
    NAVBURGER.classList.add('active')
    SPAN.classList.add('active')
    OPACITY.classList.add('active')
  } else{
    BURGER.classList.remove('active')
    NAVBURGER.classList.remove('active')
    SPAN.classList.remove('active')
    OPACITY.classList.remove('active')
    BURGER.classList.add('inactive')
    NAVBURGER.classList.add('inactive')
    SPAN.classList.add('inactive')
    OPACITY.classList.add('inactive')
  }
  
})

const close = () => {
  MUCHAEL.classList.remove('active')
  OSKA.classList.remove('active')
  FREDERICA2.classList.remove('active')
  MUCHAEL2.classList.remove('inactive')
  OSKA2.classList.remove('inactive')
  FREDERICA3.classList.remove('inactive')
  MUCHAEL3.classList.remove('inactive')
  OSKA3.classList.remove('inactive')
  FREDERICA4.classList.remove('inactive')
  LIST.classList.remove('active')
  CLOSE.classList.remove('active')
  HEADER.classList.remove('notfix')
}
document.addEventListener('click', event => {
  if(event.target.className !== 'burger_button active' && 
  event.target.className !== 'span active' && 
  event.target.className !== 'nav__burger active' && 
  event.target.className !== 'list-person'&& 
  event.target.className !== 'background' && 
  event.target.className !== 'michael2 border-gradient' && 
  event.target.className !== 'border-gradient oska2' && 
  event.target.className !== 'border-gradient fredericka3' && 
  event.target.className !== 'list-person_text-style' && 
  event.target.className !== 'margin' && 
  event.target.className !== 'list-person list-person-oska' &&  
  event.target.className !== 'list-person_img' && 
  event.target.className !== 'list-person_text-h3' && 
  event.target.className !== 'list-person_text-p') {
    BURGER.classList.remove('active')
    NAVBURGER.classList.remove('active')
    SPAN.classList.remove('active')
    OPACITY.classList.remove('active')
    NAVBURGER.classList.remove('inactive')
    close()
    if(window.innerWidth > 995) {
      NAVBURGER.classList.add('inactive')
    } else {
      NAVBURGER.classList.remove('inactive')
    }
  }
})

const MUCHAEL = document.querySelector(".michael")
const MUCHAEL2 = document.querySelector(".michael2")
const MUCHAEL3 = document.querySelector(".michael3")
const OSKA = document.querySelector(".oska")
const OSKA2 = document.querySelector(".oska2")
const OSKA3 = document.querySelector(".oska3")
const FREDERICA2 = document.querySelector(".fredericka2")
const FREDERICA3 = document.querySelector(".fredericka3")
const FREDERICA4 = document.querySelector(".fredericka4")
const LIST = document.querySelector(".testimonials_list")
const CLOSE = document.querySelector(".close")
const HEADER = document.querySelector('header')

MUCHAEL2.addEventListener("click", () => {
  MUCHAEL.classList.add('active')
  MUCHAEL2.classList.add('inactive')
  OSKA2.classList.add('inactive')
  FREDERICA3.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

MUCHAEL3.addEventListener("click", () => {
  MUCHAEL.classList.add('active')
  MUCHAEL3.classList.add('inactive')
  OSKA3.classList.add('inactive')
  FREDERICA4.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

OSKA2.addEventListener("click", () => {
  OSKA.classList.add('active')
  MUCHAEL2.classList.add('inactive')
  OSKA2.classList.add('inactive')
  FREDERICA3.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

OSKA3.addEventListener("click", () => {
  OSKA.classList.add('active')
  MUCHAEL3.classList.add('inactive')
  OSKA3.classList.add('inactive')
  FREDERICA4.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

FREDERICA3.addEventListener("click", () => {
  FREDERICA2.classList.add('active')
  MUCHAEL2.classList.add('inactive')
  OSKA2.classList.add('inactive')
  FREDERICA3.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

FREDERICA4.addEventListener("click", () => {
  FREDERICA2.classList.add('active')
  MUCHAEL3.classList.add('inactive')
  OSKA3.classList.add('inactive')
  FREDERICA4.classList.add('inactive')
  LIST.classList.add('active')
  CLOSE.classList.add('active')
  OPACITY.classList.add('active')
  HEADER.classList.add('notfix')
  NAVBURGER.classList.add('inactive')
})

CLOSE.addEventListener("click", () => {
  close()
  OPACITY.classList.remove('active')
  NAVBURGER.classList.remove('inactive')
})
const SLIDER = document.querySelector('.slider')
const PETS_LIST = document.querySelectorAll('.pets_list')
const PETS_LIST_LEFT = document.querySelectorAll('.pets_list-left')
const PETS_LIST_RIGTH = document.querySelectorAll('.pets_list-rigth')
const LIST_POINT = document.querySelectorAll('.list_point')
const LIST_POINT_LEFT = document.querySelectorAll('.list_point-left')
const LIST_POINT_RIGTH = document.querySelectorAll('.list_point-rigth')
const BUTTON_LEFT = document.querySelector('.button_left')
const BUTTON_RIGTH = document.querySelector('.button_rigth')
const arrSlider = [PETS_LIST_LEFT[0], PETS_LIST[0], PETS_LIST_RIGTH[0]]
const arrListPoint = [LIST_POINT_LEFT, LIST_POINT, LIST_POINT_RIGTH]
PETS_LIST_LEFT[0].style.order = '1'
PETS_LIST[0].style.order = '2'
PETS_LIST_LEFT[0].style.order = '3'

const createPetsList = (list, point) => {
  list.innerHTML = ''

  const list_point = [...point]
  const checkIndex1 = () => {
    indexPet2 = Math.floor(Math.random() * (list_point.length))
    if(indexPet2 === indexPet1) {
      return checkIndex1()
    }
  }

  const checkIndex2 = () => {
    indexPet3 = Math.floor(Math.random() * (list_point.length))
    if(indexPet3 === indexPet2 || indexPet3 === indexPet1) {
      return checkIndex2()
    }
  }

  const checkIndex3 = () => {
    indexPet4 = Math.floor(Math.random() * (list_point.length))
    if(indexPet4 === indexPet3 ||indexPet4 === indexPet2 || indexPet4 === indexPet1) {
      return checkIndex3()
    }
  }

  const checkIndex4 = () => {
    indexPet5 = Math.floor(Math.random() * (list_point.length))
    if(indexPet5 === indexPet4 || indexPet5 === indexPet3 || indexPet5 === indexPet2 || indexPet5 === indexPet1) {
      return checkIndex4()
    }
  }

  const checkIndex5 = () => {
    indexPet6 = Math.floor(Math.random() * (list_point.length))
    if(indexPet6 === indexPet5 || indexPet6 === indexPet4 || indexPet6 === indexPet3 || indexPet6 === indexPet2 || indexPet6 === indexPet1) {
      return checkIndex5()
    }
  }

  const checkIndex6 = () => {
    indexPet7 = Math.floor(Math.random() * (list_point.length))
    if(indexPet7 === indexPet6 === indexPet5 || indexPet6 === indexPet4 || indexPet6 === indexPet3 || indexPet6 === indexPet2 || indexPet6 === indexPet1) {
      return checkIndex6()
    }
  }

  const checkIndex7 = () => {
    indexPet8 = Math.floor(Math.random() * (list_point.length))
    if(indexPet8 === indexPet7 === indexPet6 === indexPet5 || indexPet6 === indexPet4 || indexPet6 === indexPet3 || indexPet6 === indexPet2 || indexPet6 === indexPet1) {
      return checkIndex7()
    }
  }

  let indexPet1 = Math.floor(Math.random() * (list_point.length))
  let pet1 = list_point[indexPet1]
  let indexPet2
  checkIndex1()
  let pet2 = list_point[indexPet2]
  let indexPet3
  checkIndex2()
  let pet3 = list_point[indexPet3]
  let indexPet4
  checkIndex3()
  let pet4 = list_point[indexPet4]
  let indexPet5
  checkIndex4()
  let pet5 = list_point[indexPet5]
  let indexPet6
  checkIndex5()
  let pet6 = list_point[indexPet6]
  let indexPet7
  checkIndex6()
  let pet7 = list_point[indexPet7]
  let indexPet8
  checkIndex7()
  let pet8 = list_point[indexPet8]


  if(window.innerWidth > 995) {
    list.append(pet1)
    pet1.after(pet2)
    pet2.after(pet3)
    pet3.after(pet4)
    pet4.after(pet5)
    pet5.after(pet6)
  } else {
    list.append(pet1)
    pet1.after(pet2)
    pet2.after(pet3)
    pet3.after(pet4)
  }

}

let step = 0


let clickLeft = () => {
  if(document.body.clientWidth > '1510') {
    step = 0
    step -= 1270
    SLIDER.style.left = -step + 'px'
  } else if(document.body.clientWidth > '995') {
    step = 0
    step -= 1050
    SLIDER.style.left = -step + 'px'
  } else if(document.body.clientWidth > '638') {
    step = 0
    step -= 710
    SLIDER.style.left = -step + 'px'
  }
  BUTTON_LEFT.removeEventListener('click', clickLeft)
  BUTTON_RIGTH.removeEventListener('click', clickRigth)
  left()
}

BUTTON_LEFT.addEventListener('click', clickLeft)

const left = () => {
  createPetsList(arrSlider[2], arrListPoint[2])
  createPetsList(arrSlider[0],arrListPoint[0])
  arrSlider.unshift(arrSlider[2])
  arrSlider.pop()
  arrListPoint.unshift(arrListPoint[2])
  arrListPoint.pop()
  setTimeout(() => {
    arrSlider[0].style.order = '1'
    arrSlider[1].style.order = '2'
    arrSlider[2].style.order = '3'
    SLIDER.classList.add('active')
    SLIDER.style.left = 0 + 'px'
    setTimeout(() => {
      SLIDER.classList.remove('active')
      BUTTON_LEFT.addEventListener('click', clickLeft)
      BUTTON_RIGTH.addEventListener('click', clickRigth)
    },600)
  },1000)
}


const clickRigth = () => {
  if(document.body.clientWidth > '1510') {
    step = 0
    step += 1270
    SLIDER.style.left = -step + 'px'
  }  else if(document.body.clientWidth > '995') {
    step = 0
    step += 1050
    SLIDER.style.left = -step + 'px'
  } else if(document.body.clientWidth > '638') {
    step = 0
    step += 710
    SLIDER.style.left = -step + 'px'
  }
  BUTTON_RIGTH.removeEventListener('click', clickRigth)
  BUTTON_LEFT.removeEventListener('click', clickLeft)
  rigth()
}

BUTTON_RIGTH.addEventListener('click', clickRigth)


const rigth = () => {
  createPetsList(arrSlider[0],arrListPoint[0])
  createPetsList(arrSlider[2], arrListPoint[2])
  arrSlider.push(arrSlider[0])
  arrSlider.shift()
  arrListPoint.push(arrListPoint[0])
  arrListPoint.shift()
  setTimeout(() => {
    arrSlider[0].style.order = '1'
    arrSlider[1].style.order = '2'
    arrSlider[2].style.order = '3'
    SLIDER.classList.add('active')
    SLIDER.style.left = 0 + 'px'
    setTimeout(() => {
      SLIDER.classList.remove('active')
      BUTTON_RIGTH.addEventListener('click', clickRigth)
      BUTTON_LEFT.addEventListener('click', clickLeft)
    },600)
  },1000)
}

document.addEventListener('DOMContentLoaded', () => {
  arrSlider[0].style.order = '1'
  arrSlider[1].style.order = '2'
  arrSlider[2].style.order = '3'
  createPetsList(arrSlider[0], arrListPoint[0])
  createPetsList(arrSlider[2], arrListPoint[2])
  if(window.innerWidth > 995) {
    NAVBURGER.classList.add('inactive')
  } else {
    NAVBURGER.classList.remove('inactive')
  }
})


const RANGE = document.querySelector('.range')
const TESTIMONIALS_LIST = document.querySelector('.testimonials_list')
const MACHAEL1000 = document.querySelector('.michael1000')
let stepTestimonials = 0
let prevstepTestimonials

RANGE.addEventListener('input', () => {
  if(window.innerWidth > 1510) {
    RANGE.max = '7'
    MACHAEL1000.classList.remove('active')
  } else {
    RANGE.max = '8'
  }

  const clientWidth = document.body.clientWidth

  let step = clientWidth > 1510 ? 300 : 325

  TESTIMONIALS_LIST.style.left = -step * (Number(RANGE.value)) + 'px'
})


window.addEventListener('resize', () => {
  TESTIMONIALS_LIST.style.left = 0 + 'px'
  RANGE.value = 0
  if(window.innerWidth > 1510) {
    RANGE.max = '7'
    MACHAEL1000.classList.remove('active')
  } else {
    RANGE.max = '8'
  }
  if(window.innerWidth > 995) {
    NAVBURGER.classList.add('inactive')
    OPACITY.classList.remove('active')
  } else {
    NAVBURGER.classList.remove('inactive')
    MACHAEL1000.classList.remove('active')
  }

  if(window.innerWidth > 995 &&  window.innerWidth < 1510) {
    MACHAEL1000.classList.add('active')
  }
})


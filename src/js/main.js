// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';


// ============================================
// КАСТОМНЫЙ JAVASCRIPT
// ============================================

// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Анимация при прокрутке
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Наблюдаем за элементами
document.querySelectorAll('.project-card, .about-section > div').forEach(el => {
  observer.observe(el)
})

// Активная ссылка в навигации при прокрутке
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.navbar-nav .nav-link')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
})

// Валидация формы
const contactForm = document.querySelector('form')
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()

    // Здесь можно добавить отправку данных на сервер
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.')
    this.reset()
  })
}

// Изменение фона навбара при прокрутке
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow')
  } else {
    navbar.classList.remove('shadow')
  }
})

console.log('Portfolio site loaded successfully!')

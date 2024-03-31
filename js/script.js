var swiper = new Swiper(".slide-depoimentos", { 
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".s-depoimentos .top .swiper-pagination",
    clickable: true, 
},
breakpoints: {
  768: {
  slidesPerView: 2,
  spaceBetween: 24,

  },
  800: {
    slidesPerView: 3,
    spaceBetween: 24,
  
    }
}
});

// Seleciona a barra de progresso
const progressbar = document.querySelector('.progress-bar')

// Adciona um ouvinte de evento para dectar o movimento de rolagem
window.addEventListener('scroll', () => {
  // // Calcula a porcentagem de rolagem da página
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  const scrolled  = (scrollTop / scrollHeight) * 100

  progressbar.style.width = `${scrolled}%`
  
})

// MENU MOBILE
const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active')
})
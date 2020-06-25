const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.header__nav--mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
})
console.log(hamburger)
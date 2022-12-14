const hamburger = document.querySelector('#hamb');
const navBar = document.querySelector('#mobile-navbar');
const body = document.querySelector('body');
const about = document.querySelector('#about');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
  about.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
  body.classList.remove('active');
  about.classList.remove('active');
}));
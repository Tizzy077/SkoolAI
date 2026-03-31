const navbarToggle = document.querySelector('.btn-toggle');

const menulinks = document.querySelector('.menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    menulinks.classList.toggle('active');
});
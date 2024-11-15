// JavaScript for index.html

window.onload = function () {
    const mainNav = document.getElementById('main-navbar');
    const footer = document.getElementById('session-navbar');

    setTimeout(function () {
        footer.classList.add('show');
        mainNav.classList.add('show')
    }, 500)
}
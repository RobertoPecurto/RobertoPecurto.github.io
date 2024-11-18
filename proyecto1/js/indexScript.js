// JavaScript for index.html

window.onload = function () {
    const mainNav = document.getElementById('main-navbar');
    const footer = document.getElementById('session-navbar');

    setTimeout(function () {
        mainNav.classList.add('show');
        footer.classList.add('show')
    }, 500)
}
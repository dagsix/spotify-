/*
javascript for bulma Hamburger menu (for mobile)
Javascript based on https://github.com/adambray89/adambray89.github.io/blob/master/nav-bar.html with a background tweak since the background was white on white :/
*/

fixlinks = document.querySelector("#navMenu");

(function () {

    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#' + burger.dataset.target);
    fixlinks.style.background = "#73c4fb";

    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();

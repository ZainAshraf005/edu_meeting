
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('nav');
    var meetSection = document.getElementById('meet');
    var navHeight = nav.offsetHeight;

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY;

        if (scrollPos >= meetSection.offsetTop - navHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});

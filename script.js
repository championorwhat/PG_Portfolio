window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const homeSectionHeight = document.getElementById('home').offsetHeight;

    if (window.scrollY > homeSectionHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
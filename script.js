const heroImg = document.querySelector('.hero-1');
const botmeCont = document.querySelector('.icon-botme-container');

document.addEventListener('scroll', function () {
    let position = Math.round(window.scrollY);

    botmeCont.style.transform = `translateY(${position - (position / 1.15)}px)`;

    if (position < 400) {
        heroImg.style.transform = `translateY(${position - (position / 20)}px)`;
    }
});
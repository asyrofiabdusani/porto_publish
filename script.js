const heroImg = document.querySelector('.hero-1');
const botmeCont = document.querySelector('.icon-botme-container');
const icon = document.querySelector('.icon');
const email = document.querySelector('.email').outerText;
const copyEmailBt = document.querySelector('.copy-button');

document.addEventListener('scroll', function () {
    console.log(window.scroll);
    let position = window.scrollY;
    if (screen.width > 649) {
        botmeCont.style.transform = `translateY(${position - (position / 1.15)}px)`;
    }

    if (position < 400) {
        heroImg.style.transform = `translateY(${position - (position / 5)}px)`;
        heroImg.style.transition = `-500ms`;
    }
});

copyEmailBt.addEventListener('click', function () {
    navigator.clipboard.writeText(email);

    alert("Copied email : " + email);
});
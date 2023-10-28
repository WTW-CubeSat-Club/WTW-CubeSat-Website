// TODO: Refactor in TypeScript

const logo = document.querySelector('img#logo');
const instaLogo = document.querySelector('img#insta-logo');
const twitterLogo = document.querySelector('img#twitter-logo');

const swapStyle = isLight => {
    logo.src = isLight ? 'assets/CubeSatLogoInverse.svg' : 'assets/CubeSatLogoWhite.svg';
    instaLogo.src = isLight ? 'assets/InstagramLogo.svg' : 'assets/InstagramLogoWhite.svg';
    twitterLogo.src = isLight ? 'assets/TwitterLogo.svg' : 'assets/TwitterLogoWhite.svg';

    document.querySelector('link#mystylesheet').href = isLight ? '' : 'darkmode.css';
    localStorage.setItem('theme', isLight);
};

const isLight = localStorage.getItem('theme') == 'true';

swapStyle(isLight);

const lightSwitch = document.querySelector('input#light-switch');
lightSwitch.addEventListener('change', () => swapStyle(!lightSwitch.checked));

if (!isLight) {
    lightSwitch.checked = true;
}

// Get the button
const scrollButton = document.querySelector('button#scroll-button');

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll =
    () => scrollButton.style.display = document.body.scrollTop > 1_500 || document.documentElement.scrollTop > 1_500
        ? 'block'
        : 'none';

// When the user clicks on the button, scroll to the top of the document
const scrollToTop =
    () => document.body.scrollTop = document.documentElement.scrollTop = 0;
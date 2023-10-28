// TODO: Refactor in TypeScript

// Lightness Mode
{
    const icons = new Map([
        [document.querySelector('img#logo'), 'CubeSatIcon'],
        [document.querySelector('img#insta-icon'), 'InstagramIcon'],
        [document.querySelector('img#twitter-icon'), 'TwitterIcon'],
        [document.querySelector('img#github-icon'), 'GithubIcon'],
        [document.querySelector('img#school-icon'), 'SchoolIcon'],
        [document.querySelector('img#mail-icon'), 'MailIcon'],
        [document.querySelector('img#rocket-icon'), 'RocketTopIcon'],
    ]);

    const swapStyle = isLight => {
        for (const [key, value] of icons) {
            key.src = `assets/${value + (isLight ? '' : 'White')}.svg`;
        }

        document.querySelector('link#mystylesheet').href = isLight ? '' : 'darkmode.css'; // TODO: Maybe the node should be deleted instead
        localStorage.setItem('theme', isLight);
    };

    const isLight = localStorage.getItem('theme') == 'true';

    swapStyle(isLight);

    const lightSwitch = document.querySelector('input#light-switch');
    lightSwitch.addEventListener('change', () => swapStyle(!lightSwitch.checked));

    if (!isLight) {
        lightSwitch.checked = true;
    }
}

// Scroll button

// When the user clicks on the button, scroll to the top of the document
const scrollToTop =
    () => document.body.scrollTop = document.documentElement.scrollTop = 0;

{
    const scrollButton = document.querySelector('button#scroll-button');

    // When the user scrolls down 500px from the top of the document, show the button

    const showScrollButton =
        () => scrollButton.style.display = document.body.scrollTop > 1_500 || document.documentElement.scrollTop > 1_500
            ? 'block'
            : 'none';

    showScrollButton();

    window.addEventListener('scroll', showScrollButton);
}
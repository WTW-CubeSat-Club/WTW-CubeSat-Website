// TODO: Refactor in TypeScript

// Lightness Mode
// {
//     const swapStyle = isLight => {
//         document.querySelector('label#light-switch-wrapper').title = `Turn on ${isLight ? 'Light' : 'Dark'} Mode`;

//         // document.querySelector('a.twitter-timeline').setAttribute('data-theme', isLight ? 'light' : 'dark');

//         if (isLight) {
//             if (document.querySelector('link#dark-stylesheet')) {
//                 document.querySelector('head').removeChild(document.querySelector('link#dark-stylesheet'));
//             }
//         } else {
//             const node = document.createElement('link');
//             node.id = 'dark-stylesheet';
//             node.rel = 'stylesheet';
//             node.type = 'text/css';
//             node.href = 'lightmode.css';

//             document.querySelector('head').appendChild(node);
//         }

//         localStorage.setItem('theme', isLight);
//     };

//     const isLight = localStorage.getItem('theme') == 'true';

//     swapStyle(isLight);

//     const lightSwitch = document.querySelector('input#light-switch');
//     lightSwitch.addEventListener('change', () => swapStyle(!lightSwitch.checked));

//     if (!isLight) {
//         lightSwitch.checked = true;
//     }
// }

// Scroll button

// When the user clicks on the button, scroll to the top of the document
const scrollToTop =
    () => document.body.scrollTop = document.documentElement.scrollTop = 0;

{
    const scrollButton = document.querySelector('button#scroll-button');

    // TODO: Maybe scroll down on reload
    // TODO: Stop the page from scrolling up on reload

    const onScroll =
        () => scrollButton.style.display = document.documentElement.scrollTop > 1_500
            ? 'block'
            : 'none'

    // When the user scrolls down 500px from the top of the document, show the button
    window.addEventListener('scroll', onScroll);

    onScroll();
}

// Scrolling
{
    document.documentElement.style.setProperty('--scroll', document.documentElement.scrollTop);

    window.addEventListener('scroll', () => document.documentElement.style.setProperty('--scroll', document.documentElement.scrollTop));
}
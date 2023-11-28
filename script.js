// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// TODO: Maybe scroll down on reload
// TODO: Stop the page from scrolling up on reload

const scrollButton = document.querySelector('button#scroll-button');

function onScroll() {
    document.documentElement.style.setProperty('--scroll', document.documentElement.scrollTop);
    scrollButton.style.display = document.documentElement.scrollTop > 1_500 ? 'block' : 'none';
}

document.documentElement.style.setProperty('--scroll', document.documentElement.scrollTop);

window.addEventListener('scroll', onScroll);

onScroll(); // TODO: Find out why this doesn't work
const swapStyle =
    sheet => localStorage.setItem('theme', document.querySelector('link#mystylesheet').href = sheet);

const setTheme = localStorage.getItem('theme');
console.log('theme:', setTheme);

swapStyle(setTheme == null ? 'light.css' : setTheme);

// Get the button
const myButton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll =
    () => myButton.style.display = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
        ? 'block'
        : 'none';

// When the user clicks on the button, scroll to the top of the document
const scrollToTop = () => document.body.scrollTop = document.documentElement.scrollTop = 0;
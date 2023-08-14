let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let btn = document.querySelector('.theme');

let theme = document.querySelector('html');

console.log(theme.getAttribute('data-theme'));

btn.addEventListener("click", () => {
    if(theme.getAttribute('data-theme') == 'dark'){
        theme.setAttribute('data-theme', 'light');
    } else {
        theme.setAttribute('data-theme', 'dark');
    }
})
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let btn = document.querySelector('.theme');

let theme = document.querySelector('html');

console.log(theme.getAttribute('data-theme'));

btn.addEventListener("click", () => {
    if(theme.getAttribute('data-theme') == 'dark'){
        theme.setAttribute('data-theme', 'light');

        document.querySelector("#svgEmail").setAttribute("stroke", "black");
        document.querySelector("#svgCV").setAttribute("stroke", "black");
        document.querySelector("#svgTelegram").setAttribute("fill","black");
        document.querySelector("#svgGithub").setAttribute("fill","black");
    } else {
        theme.setAttribute('data-theme', 'dark');

        document.querySelector("#svgEmail").setAttribute("stroke", "white");
        document.querySelector("#svgCV").setAttribute("stroke", "white");
        document.querySelector("#svgTelegram").setAttribute("fill","white");
        document.querySelector("#svgGithub").setAttribute("fill","white");
    }
})
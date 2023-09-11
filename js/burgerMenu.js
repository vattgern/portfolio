let btnMenu = document.querySelector('.burgerMenuBlock'),
    menu = document.querySelector('.headerMoblie');

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("burgerMenuBlockOpen");
    menu.classList.toggle("headerMoblieOpen");
});
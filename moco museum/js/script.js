var buttonHeader = document.querySelector("header nav button");

buttonHeader.addEventListener('click', geenTickets)

function geenTickets() {
    var Beschikbaar = document.querySelector('header');
    Beschikbaar.classList.toggle('open');
}
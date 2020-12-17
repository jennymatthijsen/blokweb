var menu = document.querySelector("nav button");

menu.addEventListener("click", hamburger);

function hamburger(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("hamburgermenu");
}

// een deel van deze JS voor het hamburgermenu is afkomstig van oefening 3 van Media Queries -> https://codepen.io/jennymatthijsen/pen/zYKrYyw
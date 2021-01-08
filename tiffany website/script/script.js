var menu = document.querySelector("nav button");

menu.addEventListener("click", hamburger);

function hamburger(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("menuUitklappen");
}

// een deel van deze JS voor het hamburgermenu is afkomstig van oefening 3 van Media Queries -> https://codepen.io/jennymatthijsen/pen/zYKrYyw

// de document.querySelector roept de nav button aan en zet daar door de addEventListener, die de funcitie aanroept een class op
// met die class heb ik in css het hamburgermenu kunnen maken
// de functie wordt uitgevoerd wanneer je op het menu klikt. Vandaar de "click"